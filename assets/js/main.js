
const userForm = document.getElementById("userform");
const message = document.querySelector(".message");

// form submit
userForm.onsubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const getData = Object.fromEntries(data);
    if (!getData.email || !getData.mobile.trim()) {
        message.innerHTML = customAlert("Email and Mobile Number fields are required", "danger");
    } else if (!isEmail(getData.email)) {
       message.innerHTML = customAlert("Email is not valid", "warning");
    } else if (!isMobile(getData.mobile)) {
        message.innerHTML = customAlert("Mobile Number is not valid", "warning");
    } else {
        message.innerHTML = customAlert("Data Stable", "success");
    }
    
}


// profile-image
const profileImage = document.querySelector(".profile-image");
const userPreview = document.querySelector(".user-photopreview");
const myBtn = document.querySelector(".my-btn");

profileImage.onchange = (e) => {

if (e.target.files[0].size<=1048575) {
const fileData = e.target.files[0];
  const imageUrl = URL.createObjectURL(fileData);
  userPreview.setAttribute("src", imageUrl);
  myBtn.style.display = "block";
  myBtn.style.cursor = "pointer";
} else{
  alert("Image size should be less than 1MB");
  profileImage.value = "";
}

};

// Image close button
myBtn.onclick = () => {
  userPreview.setAttribute("src", "");
  myBtn.style.display = "none";
  profileImage.value = "";
  
};


// gallery image
const galleryInput = document.querySelector(".gallery input");
const galleryPreview = document.querySelector(".gallery-preview");

galleryInput.onchange = (e) => {
  // Clear the existing preview
  // Track the remaining number of files
  for (let i = 0; i < 5; i++) {
    
    const fileData = e.target.files[i];
    const imgUrl = URL.createObjectURL(fileData);
    galleryPreview.innerHTML += `
      <div class="d-flex me-1 ms-1">
        <img src="${imgUrl}" alt="" />
        <p class="btn-close my-btn-gallery" style="cursor:pointer;" onclick="this.parentNode.parentNode.removeChild(this.parentNode); galleryInput.value = '' " ></p>
      </div>
    `;
  }
};
  userForm.addEventListener("reset", () => {
    galleryPreview.innerHTML = ""; 
  });

 