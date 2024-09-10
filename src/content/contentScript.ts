window.onload = () => {
  console.log("Content Script Loaded");
  observeDOMChanges();
};

function observeDOMChanges() {
  const observer = new MutationObserver(() => {
    whatsappSidebarElements();
    userChat();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  whatsappSidebarElements();
  userChat();
}

function whatsappSidebarElements() {
  const classNames = ["_ak8h", "_ak8o", "_ak8k"];

  classNames.forEach((className) => {
    const elements = document.getElementsByClassName(className);

    if (elements.length > 0) {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as HTMLElement;
        console.log(element, `Element with class ${className} logged`);
        element.style.filter = "blur(8px)";
        element.addEventListener("mouseover", () => {
          element.style.filter = "blur(0px)";
        });

        element.addEventListener("mouseout", () => {
          element.style.filter = "blur(8px)";
        });
      }
    } else {
      console.log(`No elements found for class ${className}`);
    }
  });
}

function userChat() {
  const classNames = ["_amie", "x1i4ejaq", "message-in", "message-out"];

  classNames.forEach((className) => {
    const elements = document.getElementsByClassName(className);
    console.log(elements.length, `Elements found for class ${className}`);
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as HTMLElement;
        console.log(element, `Element with class ${className} logged`);
        element.style.filter = "blur(8px)";
        element.addEventListener("mouseover", () => {
          element.style.filter = "blur(0px)";
        });

        element.addEventListener("mouseout", () => {
          element.style.filter = "blur(8px)";
        });
        console.log("Blur and hover effect applied to:", element);
      }
    }
  });
}
