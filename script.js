const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');

let clickCount = 0;
let isSecondClick = false;

function updateClickCount() {
	clickCountDisplay.textContent = clickCount;
}

clickButton.addEventListener('click', function() {
	if (isSecondClick) {
		clickCount--;
		isSecondClick = false;
	} else {
		clickCount++;
		isSecondClick = true;
	}
	updateClickCount();
});
updateClickCount();
const heartIcon = document.getElementById('clickButton');
		heartIcon.addEventListener('click', function() {
            if (heartIcon.classList.contains('fa-regular')) {
                heartIcon.classList.remove('fa-regular');
                heartIcon.classList.add('fa-solid');
            } else {
                heartIcon.classList.remove('fa-solid');
                heartIcon.classList.add('fa-regular');
            }
            heartIcon.classList.toggle('heartClicked');
        });

function openPopup() {
	document.getElementById("myPopup").style.display = "block";
	document.getElementById("navPopup").style.display = "none";
	}
function closePopup() {
	document.getElementById("myPopup").style.display = "none";
	document.getElementById("navPopup").style.display = "block";
}

document.getElementById("searchButton").addEventListener("click", function() {
    var searchBox = document.getElementById("searchBox");
    if (searchBox.style.display === "none") {
        searchBox.style.display = "block";
    } else {
        searchBox.style.display = "none";
    }
});

document.getElementById("chatButton").addEventListener("click", function() {
    var myChat = document.getElementById("myChat");
    if (myChat.style.display === "none") {
        myChat.style.display = "block";
    } else {
        myChat.style.display = "none";
    }
});