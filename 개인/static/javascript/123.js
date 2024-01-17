document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".icon");
    const contents = document.querySelectorAll(".content");
  
    icons.forEach((icon, index) => {
      icon.addEventListener("click", () => {
        resetActiveStates();
        icon.classList.add("active");
        contents[index].classList.add("active");
      });
    });
  
    function resetActiveStates() {
      icons.forEach((icon) => {
        icon.classList.remove("active");
      });
      contents.forEach((content) => {
        content.classList.remove("active");
      });
    }
  });
  