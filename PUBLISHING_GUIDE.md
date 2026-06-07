# Portfolio Publishing Guide

This guide documents the full process used to prepare and publish the Charles Aivan Dasig portfolio website.

## 1. Project Structure

The project was organized into frontend and backend folders:

```txt
backend/
  server.js
  routes/
  config/

frontend/
  public/
    index.html
    pages/
      about.html
      contact.html
      projects.html
      skills.html
      social.html
  styles/
  src/
  assets/
    images/
      profile.jpg
      skills/

index.html
package.json
README.md
```

The published GitHub Pages site uses the static frontend files. The root `index.html` redirects visitors to:

```txt
frontend/public/index.html
```

## 2. Frontend Fixes

The frontend was updated so the pages work from the published GitHub Pages URL.

Important fixes included:

- Added missing images to `frontend/assets/images/`.
- Added skill images to `frontend/assets/images/skills/`.
- Updated the skills page labels from placeholder text to real technology names.
- Fixed broken or mismatched file paths.
- Improved mobile navigation styling.
- Added a root `index.html` so GitHub Pages can find the homepage.

## 3. Backend Setup

The project also has a Node/Express backend:

```txt
backend/server.js
```

The backend can serve the portfolio locally and expose API routes such as:

```txt
/api/health
/api/contact
```

For local backend testing:

```bash
npm install
npm start
```

Local URL:

```txt
http://localhost:5000/
```

Important note: GitHub Pages does not run Node/Express backends. It only hosts static files.

## 4. Contact Form Setup

Because GitHub Pages is static, the contact form was connected to Web3Forms instead of the local Express API.

The contact form now submits to:

```txt
https://api.web3forms.com/submit
```

The form includes the Web3Forms access key inside:

```txt
frontend/public/pages/contact.html
```

When someone submits the form:

```txt
Visitor fills name, email, and message
→ Web3Forms receives the submission
→ Web3Forms emails the message to the connected email inbox
```

To view messages:

- Check the email connected to Web3Forms.
- Check the spam folder if messages do not appear.
- Log in to the Web3Forms dashboard at `https://app.web3forms.com/`.

## 5. Git And GitHub Setup

Git was not available in the terminal at first, so GitHub Desktop was used.

Steps followed:

1. Installed/opened GitHub Desktop.
2. Added the local project folder:

```txt
C:\Users\LENOVO\Desktop\try code\Portpolio Website Charles
```

3. Created a local Git repository.
4. Committed the project files.
5. Published the repository to GitHub.
6. Made the repository public so GitHub Pages could be enabled for free.

Common GitHub Desktop workflow:

```txt
Edit files
→ Open GitHub Desktop
→ Type a summary message
→ Commit to main
→ Push origin
```

## 6. GitHub Pages Deployment

Render was considered first because it can host Node/Express apps. However, Render asked for a payment card. To keep publishing free, GitHub Pages was used instead.

GitHub Pages setup:

1. Open the GitHub repository.
2. Go to **Settings**.
3. Open **Pages** from the left sidebar.
4. Set:

```txt
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

5. Click **Save**.
6. Wait for GitHub Pages to build and deploy.

Published site URL:

```txt
https://gisad-ops.github.io/Portpolio-Website-Charles/
```

Important spelling note: the repository URL uses `Portpolio`, not `Portfolio`.

## 7. Testing The Published Site

After deployment:

1. Open the GitHub Pages URL.
2. Check the homepage.
3. Navigate to About, Skills, Projects, Social, and Contact pages.
4. Submit a test contact message.
5. Check the Web3Forms email inbox for the message.

If the site shows `404`:

- Wait a few more minutes after enabling Pages.
- Check the repository name spelling in the URL.
- Check the GitHub **Actions** tab for Pages deployment status.

## 8. Updating The Website Later

To update the live site:

1. Edit the files in VS Code.
2. Open GitHub Desktop.
3. Review the changed files.
4. Type a short summary, for example:

```txt
Update contact page
```

5. Click **Commit to main**.
6. Click **Push origin**.
7. Wait 1-3 minutes for GitHub Pages to update.

## 9. Optional Custom Domain

A custom domain was not configured during this process.

If you buy a domain later, configure it in:

```txt
GitHub repository → Settings → Pages → Custom domain
```

Then update your domain DNS records to point to GitHub Pages. GitHub will show the exact DNS instructions when you add the custom domain.

## 10. Important Notes

- GitHub Pages is free for public repositories.
- GitHub Pages does not run backend code.
- The contact form works through Web3Forms.
- `node_modules/` should not be manually uploaded.
- Always commit and push changes before expecting the live website to update.
- The live page may take a few minutes to refresh after each push.
