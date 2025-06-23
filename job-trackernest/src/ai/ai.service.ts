import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';

@Injectable()
export class AiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, // Store in .env
    });
  }

  async analyzeJobDescription(
    description: string,
  ): Promise<{ title: string; summary: string; skills: string[] }> {
    const prompt = `
Analyze the following job description:

"${description}"

Provide:
1. Suggested Job Title
2. A brief summary (2-3 sentences)
3. 3 key skills the applicant should highlight in their resume

Respond strictly in JSON format:
{
  "title": "...",
  "summary": "...",
  "skills": ["Skill 1", "Skill 2", "Skill 3"]
}
  `;

    const response = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.2,
    });

    const aiReply = response.choices[0]?.message?.content || '{}';
    return JSON.parse(aiReply);
  }
}
