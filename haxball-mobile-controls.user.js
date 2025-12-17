// ==UserScript==
// @name         Haxball Mobile Controls
// @namespace    https://github.com/yourname/haxball-mobile-controls
// @version      1.0
// @description  Mobile touch controls for Haxball
// @match        https://www.haxball.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  function pressKey(key) {
    document.dispatchEvent(new KeyboardEvent("keydown", {
      key: key,
      code: key,
      bubbles: true
    }));
  }

  function releaseKey(key) {
    document.dispatchEvent(new KeyboardEvent("keyup", {
      key: key,
      code: key,
      bubbles: true
    }));
  }

  function createButton(label, left, bottom, key) {
    const btn = document.createElement("div");
    btn.innerText = label;

    btn.style.position = "fixed";
    btn.style.left = left;
    btn.style.bottom = bottom;
    btn.style.width = "70px";
    btn.style.height = "70px";
    btn.style.background = "rgba(0,0,0,0.6)";
    btn.style.color = "white";
    btn.style.borderRadius = "12px";
    btn.style.display = "flex";
    btn.style.alignItems = "center";
    btn.style.justifyContent = "center";
    btn.style.fontSize = "20px";
    btn.style.userSelect = "none";
    btn.style.zIndex = "9999";

    btn.addEventListener("touchstart", e => {
      e.preventDefault();
      pressKey(key);
    });

    btn.addEventListener("touchend", e => {
      e.preventDefault();
      releaseKey(key);
    });

    document.body.appendChild(btn);
  }

  // D-Pad
  createButton("⬅️", "20px", "90px", "ArrowLeft");
  createButton("➡️", "180px", "90px", "ArrowRight");
  createButton("⬆️", "100px", "160px", "ArrowUp");
  createButton("⬇️", "100px", "20px", "ArrowDown");

  // Kick
  createButton("⚽", "calc(100% - 100px)", "60px", " ");
})();
