// Placeholder for ad images in the "ads" folder
const adImages = [
  "ads/ad1.png",
  "ads/ad2.png",
  "ads/ad3.png"
];

// Get the container to hold the fake ads
const adContainer = document.getElementById("ad-container");

// Variables for controlling the ad spam
let adInterval;
let adsPerMinute = 300; // Default value
let spamRunning = false;

// Function to create a fake ad element
function createFakeAd() {
  const adType = Math.floor(Math.random() * 5) + 1; // Randomly choose ad type (1-5)
  const adElement = document.createElement("div");
  adElement.classList.add("ad", "ad" + adType);

  // Create a random ad image from the ads folder
  const randomAdImage = adImages[Math.floor(Math.random() * adImages.length)];
  const adImage = document.createElement("img");
  adImage.src = randomAdImage;
  adImage.alt = "Advertisement";
  
  // Create the skip button (fake)
  const skipButton = document.createElement("span");
  skipButton.classList.add("fake-skip");
  skipButton.innerText = "Skip Ad";
  skipButton.onclick = () => adElement.remove(); // Remove ad when skipped

  // Append the image and skip button to the ad container
  adElement.appendChild(adImage);
  adElement.appendChild(skipButton);

  // Append the ad to the ad container
  adContainer.appendChild(adElement);
}

// Function to start spamming ads
function startSpam() {
  if (spamRunning) return; // Prevent starting multiple spams
  spamRunning = true;

  // Get the ads per minute from the input field
  adsPerMinute = parseInt(document.getElementById("rateInput").value, 10);
  const adFrequency = 60000 / adsPerMinute; // Calculate frequency of ad creation in milliseconds

  // Set interval to create ads at the specified rate
  adInterval = setInterval(createFakeAd, adFrequency);
}

// Function to stop spamming ads
function stopSpam() {
  clearInterval(adInterval);
  spamRunning = false;
}

// Optionally, change the rate of ads per minute based on the input field
document.getElementById("rateInput").addEventListener("change", (e) => {
  if (spamRunning) {
    stopSpam(); // Stop current spamming if rate is changed
    startSpam(); // Restart spamming with the new rate
  }
});
