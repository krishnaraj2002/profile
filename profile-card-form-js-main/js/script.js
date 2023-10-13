//seleting potential elements
const form = document.getElementById("profileForm");
const inputName = document.getElementById("inputName");
const inputEmailID = document.getElementById("inputEmailID");
const inputPassword = document.getElementById("inputPassword");
const inputAddress = document.getElementById("inputAddress");
const inputTitle = document.getElementById("inputTitle");
const inputBio = document.getElementById("inputBio");
const inputAvater = document.getElementById("inputAvater");

let existingUser = null;
// //profile info elements
// const userProfile = document.querySelector("#userProfile");
// const profileImg = document.getElementById("profileImg");
// const profileName = document.getElementById("profileName");
// const profileTitle = document.getElementById("profileTitle");
// const profileDescription = document.getElementById("profileDescription");

//avaterUrl
let avaterUrl;
function getAvaterSrc(event) {
	avaterUrl = URL.createObjectURL(event.target.files[0]);
}

function deleteProfile(e) {
	e.parentNode.parentNode.parentNode.parentNode.style.display = "none";

}

// function editProfile(e) {
// 	const parent = e.parentNode.parentNode.parentNode.parentNode;
// 	console.log(parent);
// 	const currentName = parent.querySelector("h2").innerHTML;
// 	const currentTitle = parent.querySelector("h3").innerHTML;
// 	const currentDescription = parent.querySelector("p").innerHTML;
// 	const currentImg = parent.querySelector("img").src;

// 	const file = new File();
// 	console.log(parent, file);

// 	inputName.value = currentName;
// 	inputTitle.value = currentTitle;
// 	inputDescription.value = currentDescription;
// 	inputAvater.value = currentImg;
// }

// Toggle password visibility
  function togglePasswordVisibility() {
    const passwordInput = document.getElementById("inputPassword");
    const toggleButton = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Show";
    }
}

// Add an event listener to the toggle button
document.getElementById("togglePassword").addEventListener("click", togglePasswordVisibility);

form.addEventListener("submit", (e) => {
    e.preventDefault();
	if (
		inputName.value &&
        inputEmailID.value &&
        inputPassword.value &&
        inputAddress.value &&
		inputTitle.value &&
		inputBio.value &&
		inputAvater.value
	) {
		userProfile.innerHTML += `
                <div class="profile-info"> 
                    <div class="avater">
                        <img id="profileImg" src="${
													inputAvater.value ? avaterUrl : "../img/avater.svg"
												}" alt="avater" />
                    </div>
                    <div class="info">
                        <div class="profileName-flexbox">
                            <h2>${inputName.value}</h2>
                            <div class="edit-delete-icon"> 
                               <!-- <i class="fas fa-user-edit" onclick="editProfile(this)"></i> -->
                                <i class="fas fa-user-times" onclick="deleteProfile(this)"></i>
                            </div>
                            
                        </div>
                        <h3>${inputTitle.value}</h3>
                        <p>${inputBio.value}</p>
                    </div>
                </div>
        
        `;

		form.reset();
	} else {
		alert("Enter all the fields");
	}
});
