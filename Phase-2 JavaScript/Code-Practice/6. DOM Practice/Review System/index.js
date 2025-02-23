function addreview() {
  const name = document.getElementById("name");
  const reviewText = document.getElementById("review-text");
  const reviewList = document.getElementById("review-list");

  const review = document.createElement("div");
  review.innerHTML = `
            <div><b>Name :</b> ${name.value}</div>
            <p><b>Review :</b> ${reviewText.value}</p>
    `;
  review.style.boxSizing = "border-box";
  review.style.padding = "20px";
  review.style.background = "#F5F5F5";
  review.style.width = "100%";
  review.style.borderRadius = "10px";
  review.style.marginTop = "20px";
  review.style.fontSize = "17px";
  review.style.fontFamily = "Arial, sans-serif";
  review.style.display = "flex";
  review.style.flexDirection = "column";
  review.style.gap = "10px";

  if(name.value !== "" && reviewText.value !== ""){
    reviewList.appendChild(review);
  } else {
    alert("Add Full Detail")
  }

  name.value = "";
  reviewText.value = "";
}

function themeChange() {
    const body = document.body;
    const themeButton = document.getElementById("theme-btn");

    if (body.style.backgroundColor === "white" || body.style.backgroundColor === "") {
        body.style.backgroundColor = "#d1d1d1";
        themeButton.innerText = "White"
    } else {
        body.style.backgroundColor = "white";
        themeButton.innerText = "Light Gray";
    }
}
