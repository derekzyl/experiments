const file = document.getElementById("filess");
const display = document.getElementById("display");
const bod = document.getElementById("text-data");
bod.style.display = "none";
const newInfo = document.createElement("div");
file.addEventListener("change", (event) => {
  const d = event.target.files;

  if (file) {
    const [imageFile] = d;
    var file_reader = new FileReader();
    file_reader.readAsDataURL(imageFile);
    file_reader.onload = function (event) {
      var base64 = file_reader.result;
      bod.style.display = "block";

      newInfo.innerText = "click inside the text area to copy";
      bod.appendChild(newInfo);
      display.innerText = base64;

      return base64;
    };
  }
});
display.addEventListener("click", () => {
  display.select();
  document.execCommand("Copy");
  newInfo.innerText = "copied ✅✅";
});
