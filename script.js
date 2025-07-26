const shareBtn = document.querySelector("#shareBtn");
const shareBtn2 = document.querySelector("#shareBtn2");
const sharePopup = document.querySelector(".share-popup");
const shareOverlay = document.querySelector(".share-overlay");

shareBtn.addEventListener("click", () => 
{
  console.log ("first share button");
  shareOverlay.classList.toggle('active');
  sharePopup.classList.toggle('active');
}
);

shareBtn2.addEventListener("click", () => 
  {
    console.log ("second share button");
    shareOverlay.classList.remove('active');
  }
  );

