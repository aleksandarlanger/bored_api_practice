document
  .querySelector(".button-82-pushable")
  .addEventListener("click", function () {
    fetch("https://apis.scrimba.com/bored/api/activity")
      .then((response) => response.json())
      .then((data) => {
        document.querySelector("#activity_text").textContent = data.activity;
      });

    document.getElementById("activity_text").animate(
      {
        opacity: [0, 0.9, 1],
        offset: [0, 0.8],
        easing: ["ease-in", "ease-out"],
      },
      1000
    );
  });
