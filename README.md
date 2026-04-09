# 💼 JobHuntly - Job Management Dashboard

A dynamic job tracking application that allows users to manage job applications, track interview statuses, and organize rejections in real-time. Built with a focus on interactive DOM updates and responsive design.

---

## 🚀 Project Overview
JobHuntly is a centralized dashboard for job seekers. It allows users to view available job listings and move them between different categories—**Interview** or **Rejected**—with a single click. The application dynamically calculates statistics and updates the UI without requiring a page reload, providing a smooth, app-like experience.

## 🛠️ Tech Stack
<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/DaisyUI-5AD7E4?style=for-the-badge&logo=daisyui&logoColor=black" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

## ✨ Key Features
* **Live Dashboard Stats:** Real-time counters that track the number of Total, Interviewing, and Rejected jobs.
* **Smart Tab System:** Switch between 'All', 'Interview', and 'Rejected' views. Includes "Empty State" illustrations when no jobs are available in a category.
* **Toggle Actions:** Move a job from 'Interview' to 'Rejected' (or vice versa) instantly; the dashboard counts adjust automatically.
* **Delete Functionality:** Remove job cards permanently from the UI with auto-decrementing counters.
* **Responsive Design:** A mobile-first layout that stacks cards beautifully on smaller screens.
* **Clean UI:** Styled using DaisyUI components for a modern, professional look.

## 📦 Core Logic & Dependencies
* **Vanilla JavaScript:** Utilizes event listeners and DOM manipulation to handle state changes.
* **Tailwind CSS:** For custom grid layouts and spacing.
* **DaisyUI:** Used for the Stat cards, Tabs, and Button styling.
