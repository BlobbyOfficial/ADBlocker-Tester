// Fake Google AdSense simulation script

// Simulated function to load an ad (just logs to the console for testing purposes)
function loadFakeAd(adSlotID) {
  console.log(`Fake AdSense Ad Loaded for Slot: ${adSlotID}`);
  console.log(`Ad ID: ${adSlotID}`);
  console.log(`Ad Time: ${new Date().toISOString()}`);
}

// Simulated function to display an ad (mimics showing an ad on the page)
function displayFakeAd(adSlotID) {
  console.log(`Displaying Fake Ad for Slot: ${adSlotID}`);
  // Simulate ad content by appending a fake ad image and description
  const adContainer = document.createElement('div');
  adContainer.classList.add('ad-banner');
  adContainer.innerHTML = `
    <img src="ads/ad1.png" alt="Fake Ad" style="width: 100%; height: auto;">
    <p><strong>Sponsored</strong> - This is a fake ad, but it looks real!</p>
    <button class="fake-click" onclick="fakeAdClick('${adSlotID}')">Click Here</button>
  `;
  document.body.appendChild(adContainer);
}

// Simulated function to track a fake ad click (logs interaction)
function fakeAdClick(adSlotID) {
  console.log(`Fake Ad Clicked in Slot: ${adSlotID}`);
  console.log(`Ad Slot ID: ${adSlotID}`);
  console.log(`Click Time: ${new Date().toISOString()}`);
}

// Simulated function to create multiple fake ads on page load
document.addEventListener('DOMContentLoaded', () => {
  const adSlots = ['ad-slot-1', 'ad-slot-2', 'ad-slot-3']; // Example ad slots
  adSlots.forEach(slot => {
    loadFakeAd(slot); // Simulate loading of the ad
    displayFakeAd(slot); // Display fake ad on the page
  });
});

// Example function to refresh a fake ad in a specific slot (mimic AdSense behavior)
function refreshFakeAd(adSlotID) {
  console.log(`Refreshing Fake Ad for Slot: ${adSlotID}`);
  setTimeout(() => {
    displayFakeAd(adSlotID); // Simulate refreshing ad
  }, 3000); // Refresh after 3 seconds
}

// Example of refreshing an ad after 10 seconds
setTimeout(() => {
  refreshFakeAd('ad-slot-1');
}, 10000);
