# 🔐 KeyNest – Browser-Based Password Manager

KeyNest is a simple, secure, and privacy-first password manager built with **React**. It helps you save and organize your website usernames and passwords directly in your browser using **LocalStorage**. No sign-up, no server, no data tracking—everything stays on your device.

---

## 🚀 Features

- 🌐 **Client-side only** – No server or database required
- 🔐 **Privacy-focused** – Data is stored only in your browser (LocalStorage)
- 🧠 **Easy to use** – Add, edit, delete credentials easily
- 📱 **Responsive** – Works on all screen sizes
- 💻 **Open Source** – Freely available for contributions

---

## 🔒 How Your Data is Stored

KeyNest does **not** send or store your data on any backend or cloud server. All your saved information is stored **only in your browser's LocalStorage**.

### 🔍 How to View Your LocalStorage

1. Open KeyNest in your browser.
2. Right-click anywhere on the page and select **Inspect**.
3. Go to the **Application** tab.
4. In the left menu, expand **Storage > LocalStorage** and click on the KeyNest site.
5. You’ll see your saved data – accessible only on your device.

---

## 🛠️ Installation

```bash
git clone https://github.com/MaheshJV9130/keynest.git
cd keynest
npm install
npm run dev
