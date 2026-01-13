# DienteOk - Premium Dental Clinic Template

![DienteOk Preview](https://via.placeholder.com/1200x600?text=DienteOk+Premium+Dev+Preview)

**DienteOk** is a high-end, modern web template designed for dental clinics and medical professionals. Built with **Next.js 16** and **TailwindCSS v4**, it offers a premium "Future Health" aesthetic with glassmorphism effects, advanced animations, and a fully responsive layout.

## ✨ Key Features

-   **Premium Design**: "Future Health" aesthetic featuring mesh gradients, glassmorphism cards, and liquid buttons.
-   **Security Suite**: Built-in protection against content theft (Right-click block, No text selection, No image dragging).
-   **Zero Backend**: Powered entirely by client-side filtering and a local JSON data source (`mockData.json`) for easy management.
-   **Responsive**: Meticulously crafted for mobile, tablet, and desktop.
-   **Performance**: Optimized for speed with Next.js App Router and static export capabilities.

## 🛠 Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Language**: TypeScript
-   **Deployment**: GitHub Pages (Static Export)

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/dienteok.git
    cd dienteok
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization

All website content is centralized in **`src/data/mockData.json`**. You don't need to touch the React code to update text or images.

**To update content:**
1.  Open `src/data/mockData.json`.
2.  Locate the section you want to edit (e.g., `"hero"`, `"about"`, `"services"`).
3.  Update the text strings or image URLs.
4.  Save the file. The site will auto-update.

## 🌐 Deployment (GitHub Pages)

This project is configured for **Static Export**, making it perfect for free hosting on GitHub Pages.

**Automated Deployment:**
1.  Push your code to a GitHub repository.
2.  Go to **Settings > Pages** in your GitHub repository.
3.  Under **Build and deployment**, select **GitHub Actions** as the source.
4.  A workflow has already been created at `.github/workflows/deploy.yml`. GitHub will detect it and automatically build/deploy your site on every push to `main`.

**Manual Build:**
To build the static files locally:
```bash
npm run build
```
The static files will be generated in the `out/` directory.

## 🔒 Restrictions
This template includes aggressive content protection by default:
-   `Context Menu (Right Click)` is disabled.
-   `Text Selection` is disabled globally.
-   `Image Dragging` is disabled.
To modify these, edit `src/components/Restrictions.tsx` or `src/app/globals.css`.

---

© 2026 DienteOk Template. Designed by **Jean Carlos Oviedo**.
