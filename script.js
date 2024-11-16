console.log("Welcome to Jagan Nath University!");

function getPlacementReport() {
  alert("Opening Placement Report...");
  // Add actual redirection logic here
}

function downloadBrochure() {
  alert("Downloading Brochure...");
  // Add actual download logic here
}

function displayExtraDetails() {
  const extraDetails = document.getElementById('extraDetails');
  if (extraDetails.style.display === 'none' || extraDetails.style.display === '') {
    extraDetails.style.display = 'block';
  } else {
    extraDetails.style.display = 'none';
  }
}

function toggleDetails() {
  const details = document.getElementById('extraDetails');
  details.classList.toggle('hidden');
}
function initMap() {
  const universityLocation = { lat: 37.7749, lng: -122.4194 }; // Example coordinates for San Francisco
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: universityLocation,
  });

  new google.maps.Marker({
    position: universityLocation,
    map: map,
    title: "University Website Design - Easy Tutorials",
  });
}
function validateLogin() {

  function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const program = document.getElementById('program').value;
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (name === "" || email === "" || phone === "" || program === "" || message === "") {
      alert("Please fill out all fields.");
      return false;
    }

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Basic phone validation (10-15 digits)
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number.");
      return false;
    }

    // Submit form confirmation
    alert("Thank you for applying! We will review your application and get back to you shortly.");
    return true;
  }

  function validateForm() {
    const fullName = document.getElementById("fullName").value;
    const studentId = document.getElementById("studentId").value;
    const department = document.getElementById("department").value;
    const program = document.getElementById("program").value;
    const examType = document.getElementById("examType").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (!fullName || !studentId || !department || !program || !examType || !email || !phone) {
      alert("Please fill out all required fields.");
      return false;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!validatePhone(phone)) {
      alert("Please enter a valid phone number.");
      return false;
    }

    alert("Form submitted successfully!");
    return true;
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validatePhone(phone) {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  }

