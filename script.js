document.addEventListener("DOMContentLoaded", function () {
  // Daftar game
  var gamesData = [
    { title: "Game 1", genre: "Action" },
    { title: "Game 2", genre: "Adventure" },
    { title: "Game 3", genre: "Puzzle" },
    { title: "Game 4", genre: "Racing" },
    { title: "Game 5", genre: "Simulation" }
  ];

  var gamesList = document.getElementById("games");

  // Menambahkan setiap game ke dalam daftar dengan animasi
  gamesData.forEach(function (game, index) {
    var listItem = document.createElement("li");
    listItem.classList.add("card");
    listItem.innerHTML = "<strong>" + game.title + "</strong> - " + game.genre;
    gamesList.appendChild(listItem);

    // Menerapkan animasi pada setiap card
    setTimeout(function () {
      listItem.classList.add("active");
    }, 100 * index);
  });
});
