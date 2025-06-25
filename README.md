# Mini Job Tracker Web App – Frontend

This is the frontend for the Mini Job Tracker web app, built with Next.js, React, and Tailwind CSS.

## Features

- **Add Job Applications:** Fill out a form to add new job applications with title, company, application link, and status.
- **View Jobs:** See all your job applications in a sortable table.
- **Status Tracking:** Track the status of each application (Applied, Interviewing, Rejected, Offer).
- **Delete Jobs:** Remove job applications from your list.
- **Responsive Design:** Works well on desktop and mobile devices.
- **External Links:** Open application links in a new tab.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Connect to the backend

By default, the frontend expects the backend API at  
`https://mini-job-tracker-web-app-1.onrender.com`.

If you want to use a local backend, update the API URL in  
`utils/api.ts` or set the `NEXT_PUBLIC_API_URL` environment variable.

### 4. Build for production

```bash
npm run build
npm start
```

---

## How to Expand the App

Here are some ideas for expanding the Mini Job Tracker:

- **Edit Jobs:** Add the ability to edit existing job applications.
- **Authentication:** Allow users to sign up, log in, and manage their own job lists.
- **Notes & Attachments:** Let users add notes or upload files (like resumes or cover letters) to each job.
- **Search & Filter:** Add search, filter, and sort options for easier job management.
- **Notifications:** Notify users about upcoming interviews or application deadlines.
- **Analytics:** Show statistics (e.g., number of applications, offers, rejection rates).
- **Mobile App:** Build a mobile version using React Native or similar.
- **Dark Mode:** Add a dark mode toggle for better accessibility.

---

**Note:**  
You need to have the backend running for full functionality. See the backend README for