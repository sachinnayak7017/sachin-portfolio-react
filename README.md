# Sachin Kumar Portfolio: Complete Setup, Content Update and GitHub Pages Deployment Guide

This guide explains how to run the portfolio, update current data, add projects, upload images/videos/PDFs/certificates, and deploy free on GitHub Pages.

## 1. Project folders

```text
sachin-portfolio-react/
├── .github/workflows/deploy.yml
├── public/
│   ├── credentials/
│   ├── project-images/
│   ├── project-videos/
│   └── resources/
├── src/
│   ├── App.jsx
│   ├── data.js
│   ├── main.jsx
│   └── style.css
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

Use `src/data.js` for projects, skills, resources, coding profiles and credentials. Store every file that must be publicly available inside `public/`.

## 2. Install software

Install Node.js LTS, Git and Visual Studio Code. Create a free GitHub account.

Verify:

```bash
node --version
npm --version
git --version
```

## 3. Run locally

Extract the portfolio ZIP, open `sachin-portfolio-react` in VS Code, and open Terminal > New Terminal.

```bash
npm install
npm run dev
```

Open the URL shown by Vite, normally:

```text
http://localhost:5173/
```

Stop with `Ctrl + C`.

Production check:

```bash
npm run build
npm run preview
```

## 4. Update personal data

Open `src/App.jsx` and search for:

```text
Sachin Kumar
sachinnayak7017@gmail.com
+917017253361
Noida, Uttar Pradesh, India
```

Replace only the exact value that must change.

## 5. Update skills

Open `src/data.js`. Example:

```javascript
export const skills = {
  "Programming Languages": ["Java", "Python"],
  "Backend Engineering": [
    "Spring Boot",
    "Spring Security",
    "REST APIs",
    "Microservices"
  ]
};
```

Add a skill inside its correct array and keep commas correct.

## 6. Add a project

In `src/data.js`, find `export const projects = [` and add:

```javascript
{
  title: "Project Name",
  subtitle: "Project Type",
  category: "Backend",
  situation: "Explain the real problem or context.",
  task: "Explain what the system needed to accomplish.",
  actions: [
    "First verified technical action",
    "Second verified technical action",
    "Third verified technical action",
    "Fourth verified technical action"
  ],
  result: "Explain the verified outcome without fake metrics.",
  tags: ["Java", "Spring Boot", "MySQL"],
  github: "https://github.com/YOUR_USERNAME/REPOSITORY",
  video: "",
  images: []
}
```

Place a comma between project objects.

## 7. Upload project images

Copy files to:

```text
public/project-images/
```

Recommended names:

```text
digital-master-dashboard.png
digital-master-architecture.png
digital-master-swagger.png
```

Configure:

```javascript
images: [
  "project-images/digital-master-dashboard.png",
  "project-images/digital-master-architecture.png"
]
```

Do not include `public/` in the data path.

Correct:

```javascript
"project-images/dashboard.png"
```

Incorrect:

```javascript
"public/project-images/dashboard.png"
```

File names are case-sensitive after deployment.

## 8. Add project video

Recommended: upload to YouTube with Unlisted visibility:

```javascript
video: "https://www.youtube.com/watch?v=VIDEO_ID"
```

For local MP4, copy to `public/project-videos/` and use:

```javascript
video: "project-videos/project-demo.mp4"
```

YouTube is better for large videos because it keeps the GitHub repository small.

## 9. Update exact GitHub repository link

```javascript
github: "https://github.com/YOUR_USERNAME/EXACT_REPOSITORY"
```

## 10. Replace resume

Put the latest resume in:

```text
public/resources/Sachin-Kumar-Resume.pdf
```

If the project currently uses DOCX, search in `src/App.jsx` and `src/data.js` for:

```text
resources/Sachin-Kumar-Resume.docx
```

Replace with:

```text
resources/Sachin-Kumar-Resume.pdf
```

## 11. Add downloadable PDFs and notes

Put files in `public/resources/`:

```text
java-backend-notes.pdf
dsa-question-sheet.pdf
system-design-notes.pdf
backend-interview-guide.pdf
```

Add to `resources` in `src/data.js`:

```javascript
{
  title: "Java Backend Notes",
  type: "Notes",
  format: "PDF",
  description: "Java, Spring Boot and REST API revision notes.",
  url: "resources/java-backend-notes.pdf",
  downloadable: true
}
```

For YouTube:

```javascript
{
  title: "Python Learning Playlist",
  type: "Video",
  format: "YouTube",
  description: "Python concepts and practical videos.",
  url: "https://www.youtube.com/playlist?list=PLAYLIST_ID",
  downloadable: false
}
```

Use `downloadable: true` for local files and `false` for external links.

## 12. Add coding-profile links

In `src/data.js`:

```javascript
export const profiles = [
  { name: "GitHub", url: "https://github.com/sachinnayak7017" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sachin-kumar-860541286/" },
  { name: "LeetCode", url: "https://leetcode.com/u/YOUR_USERNAME/" },
  { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/YOUR_USERNAME/" }
];
```

Empty URL shows `Link pending`.

## 13. Add certificate image

Copy images to:

```text
public/credentials/
```

Example:

```text
java-programming-oop.jpg
hackathon-first-place.jpg
science-day-second-place.jpg
```

Configure:

```javascript
{
  title: "Java Programming & OOP",
  issuer: "Certificate of Excellence",
  image: "credentials/java-programming-oop.jpg",
  url: "https://certificate-verification-url.com"
}
```

Use `url: ""` when no verification link exists.

## 14. Test every update

```bash
npm run dev
```

Check desktop, mobile menu, resume download, project links, images, videos, resources, coding profiles, certificates, email and phone.

Then:

```bash
npm run build
npm run preview
```

Deploy only after `npm run build` succeeds.

## 15. Deploy free with GitHub Pages

### Create repository

Create a public repository named:

```text
sachin-portfolio
```

Do not initialize it with another README or `.gitignore`.

### Push with Git

Open terminal in the project folder:

```bash
git init
git config user.name "Sachin Kumar"
git config user.email "YOUR_GITHUB_EMAIL"
git add .
git commit -m "Create portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sachin-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_GITHUB_EMAIL`.

### Enable Pages

Open repository:

```text
Settings > Pages
```

Under Build and deployment select:

```text
Source: GitHub Actions
```

The existing workflow is:

```text
.github/workflows/deploy.yml
```

Open repository `Actions` and wait for `Deploy portfolio to GitHub Pages` to become green.

Expected URL:

```text
https://YOUR_USERNAME.github.io/sachin-portfolio/
```

## 16. Upload without Git commands

1. Create the public `sachin-portfolio` repository.
2. Extract the ZIP.
3. Open the `sachin-portfolio-react` folder.
4. On GitHub select `Add file > Upload files`.
5. Upload the extracted contents, not the ZIP itself.
6. Confirm `.github`, `public`, `src`, `index.html`, `package.json`, and `vite.config.js` are at repository root.
7. Commit the files.
8. Select `Settings > Pages > GitHub Actions`.
9. Check the Actions tab.

## 17. Update the live portfolio later

After edits:

```bash
git status
git add .
git commit -m "Update portfolio content"
git push
```

Every push to `main` automatically redeploys the website.

## 18. Common errors

### Image does not appear

Verify the file is inside `public`, path excludes `public/`, spelling and uppercase/lowercase match.

### Download pending remains

The resource `url` is empty. Example fix:

```javascript
url: "resources/java-backend-notes.pdf"
```

### GitHub Pages blank page

Open Repository > Actions, inspect the failed workflow, and verify Settings > Pages > Source is GitHub Actions.

### `origin already exists`

```bash
git remote -v
git remote set-url origin https://github.com/YOUR_USERNAME/sachin-portfolio.git
```

### Push rejected

```bash
git pull --rebase origin main
git push
```

### npm not recognized

Install Node.js LTS, close VS Code, reopen it, then verify `node --version` and `npm --version`.

## 19. Final checklist

- [ ] Latest resume added
- [ ] Email and phone verified
- [ ] GitHub and LinkedIn links tested
- [ ] LeetCode and GeeksforGeeks added
- [ ] Exact project repository links added
- [ ] STAR content is factual
- [ ] Project screenshots added
- [ ] Videos added
- [ ] Certificate images added
- [ ] Resource PDFs download
- [ ] `npm run build` succeeds
- [ ] GitHub Actions is green
- [ ] Live page works on mobile and desktop
