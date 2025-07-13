const shareBtn = document.querySelector("#shareBtn");
const shareBtn2 = document.querySelector("#shareBtn2");

shareBtn.addEventListener("click", () => 
{
  console.log ("first share button");
  showOverlay ();
  showPopup ();
}
);

shareBtn2.addEventListener("click", () => 
  {
    console.log ("second share button");
  }
  );

const sharePopup = document.querySelector(".share-popup");
const shareOverlay = document.querySelector(".share-overlay");

function showOverlay () {
  shareOverlay.classList.toggle('active');
}

function showPopup () {
  sharePopup.classList.toggle('active');
}