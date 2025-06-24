import React from "react";

const Footer = () => {
  return (
    <footer className="text-sm text-white p-4 text-center w-screen relative bottom-0 bg-slate-800 mg:text-xl">
      <p className="mb-2">
        🔐 <strong>How KeyNest Works & Keeps You Safe</strong>
      </p>
      <p className="mb-2">
        KeyNest helps you securely organize and save your website usernames and
        passwords—
        <strong> right in your own browser</strong>. We don’t collect, store, or
        send your data to any server or database. Everything stays local using
        your browser’s built-in <strong>LocalStorage</strong> feature.
      </p>
      <p className="text-center">Made with 💖 by Mahesh</p>
      <p>
        💻 This project is open-source! Contribute or explore the code on{" "}
        <a
          href="https://github.com/MaheshJV9130/keynest"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 underline hover:text-green-300"
        >
          GitHub
        </a>
        
      </p>
    </footer>
  );
};

export default Footer;
