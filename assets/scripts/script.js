const $menuBtn = document.getElementById("menu-btn");
const $blackScreen = document.getElementById("blackScreen");
const $mobileMenu = document.getElementById("mobileMenu");
const $searchScreen = document.getElementById("searchScreen");
let isMenuOpen = false;
$menuBtn.addEventListener("click", () => {
  if (!isMenuOpen) {
    $menuBtn.classList.add("open");
    $blackScreen.style.display = "block";
    setTimeout(() => {
      $blackScreen.style.transition = "opacity 0.5s ease-in-out";
      $blackScreen.style.opacity = 1;
    }, 20);
    $mobileMenu.style.display = "block";
    setTimeout(() => {
      $mobileMenu.style.transition = "opacity 0.5s ease-in-out";
      $mobileMenu.style.opacity = 1;
    }, 20);
    $mobileMenu.classList.add("activeMobileMenu");
  } else {
    $menuBtn.classList.remove("open");
    $mobileMenu.classList.remove("activeMobileMenu");
    $blackScreen.style.opacity = 0;
    setTimeout(() => {
      $blackScreen.style.display = "none";
    }, 500);
    $mobileMenu.style.opacity = 0;
    setTimeout(() => {
      $mobileMenu.style.display = "none";
    }, 500);
  }

  isMenuOpen = !isMenuOpen;
});
document.querySelectorAll("ul.mainMenu li").forEach((item) => {
  if (item.getElementsByTagName("ul").length) {
    item.classList.add("hasChild");
  }
});
document.querySelectorAll(".hasChild").forEach((item) => {
  item
    .querySelector("a")
    .insertAdjacentHTML(
      "beforeend",
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21l-12-18h24z"/></svg>'
    );
});
$mobileMenu.querySelectorAll(".hasChild>a").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

document.querySelectorAll(".hasChild").forEach((item) => {
  item.addEventListener("click", function () {
    if (item.classList.contains("openedLi")) {
      item.classList.remove("openedLi");
    } else {
      document.querySelectorAll(".hasChild").forEach((item2) => {
        item2.classList.remove("openedLi");
      });
      item.classList.add("openedLi");
    }
  });
});
//delete 2 second child in mobile menu
if ($mobileMenu.querySelector(".mobileMenuBody>div .hasChild .hasChild>a>i")) {
  $mobileMenu
    .querySelector(".mobileMenuBody>div .hasChild .hasChild>a>i")
    .remove();
}

$blackScreen.addEventListener("click", function () {
  $menuBtn.classList.remove("open");
  isMenuOpen = false;
  $mobileMenu.classList.remove("activeMobileMenu");
  $blackScreen.style.opacity = 0;
  $mobileMenu.style.opacity = 0;
  setTimeout(function () {
    $blackScreen.style.display = "none";
    $mobileMenu.style.display = "none";
  }, 500);
});

document.getElementById("appearSearch").addEventListener("click", function () {
  $blackScreen.style.display = "block";
  setTimeout(function () {
    $blackScreen.style.transition = "opacity 0.5s ease-in-out";
    $blackScreen.style.opacity = 1;
  }, 20);
  $blackScreen.classList.add("diffrentBG");
  $searchScreen.classList.add("activeSearchScreen");
  $searchScreen.getElementById("form").classList.add("activeForm");
  $searchScreen.getElementById("input").focus();
});
$searchScreen.addEventListener("click", function (data, handler) {
  if (data.target == this) {
    //Do Stuff (only element clicked, not children)
    $blackScreen.style.opacity = 0;
    setTimeout(function () {
      $blackScreen.style.display = "none";
    }, 500);
    $blackScreen.classList.remove("diffrentBG");
    $searchScreen.classList.remove("activeSearchScreen");
    $searchScreen.getElementById("form").classList.remove("activeForm");
  }
});
const $slider = document.getElementById("slider");
if ($slider) {
  $slider.querySelectorAll(".imageLoadData").forEach((item) => {
    item.style.backgroundImage = `url(${item.dataset.bg})`;
  });
}

const $topNewsLast = document.getElementById("topNewsLast");
if ($topNewsLast) {
  $topNewsLast.querySelectorAll(".imageLoadData").forEach((item) => {
    item.style.backgroundImage = `url(${item.dataset.bg})`;
  });
}

const $galleryPart = document.getElementById("galleryPart");
if ($galleryPart) {
  $galleryPart.querySelectorAll(".imageLoadData").forEach((item) => {
    item.style.backgroundImage = `url(${item.dataset.bg})`;
  });
}
const $categoryPageTopNewss = document.getElementById("categoryPageTopNewss");
if ($categoryPageTopNewss) {
  $categoryPageTopNewss.querySelectorAll(".imageLoadData").forEach((item) => {
    item.style.backgroundImage = `url(${item.dataset.bg})`;
  });
}