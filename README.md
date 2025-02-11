# Portfolio Website

This is a modern and responsive portfolio website built using **React.js** and **Tailwind CSS** with smooth animations powered by **Framer Motion**.

## 🚀 Features
- **Dynamic Content with `props.jsx`** - Easily update site details like title, projects, and contact info.
- **Smooth Animations** - Powered by **Framer Motion**.
- **Split-Screen Layout** - Unique and engaging design.
- **Projects Showcase** - Display your projects dynamically.
- **Contact & Social Links** - Social icons are dynamically loaded based on provided links.

## 🛠️ Technologies Used
- **React.js** - Component-based UI.
- **Tailwind CSS** - Modern styling.
- **Framer Motion** - Animations.
- **React Icons** - Icons for better UI.

## 📂 File Structure
```
/src
 ├── assets/         # Images & Icons
 ├── components/     # Reusable Components
 │   ├── Header.jsx
 │   ├── Home.jsx
 │   ├── About.jsx
 │   ├── Projects.jsx
 │   ├── Footer.jsx
 ├── props.jsx       # Site props for easy customization
 ├── App.jsx         # Main App Component
 ├── index.js        # Entry Point
```

## 🔧 Installation & Setup
```sh
git clone https://github.com/Zaid-deve/react-portfolio
cd react-portfolio
npm install
npm start
```
The site will be available at `http://localhost:5173/`.

## ✏️ Editing `props.jsx`
Modify `props.jsx` to update the site's content dynamically:
```js
const siteProps = {
    title: ["Hey, Welcome to my portfolio", "Hire me for creating and managing webpages", "Hire me for productivity"],
    github: "https://github.com/yourusername",
    logo: "Your Name",
    owner: "Your Name",
    socialLinks: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        email: "mailto:your@email.com",
        phone: "tel:+1234567890"
    }
};

const projects = [
    {
        name: "Project Name",
        description: "Short project description.",
        github: "https://github.com/project-link",
        language: "JavaScript",
        icon: <IconComponent />
    }
];

export { siteProps, projects };
```

## 📞 Contact
For any inquiries, feel free to reach out:
- 📧 Email: [your@email.com](mailto:your@email.com)
- 🔗 Phone [7990225947](tel:7990225947)

---
💡 **Tip:** Customize `props.jsx` to make the portfolio truly yours! 🚀

