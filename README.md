# AdBlocker Tester

AdBlocker Tester is a project designed to test ad blockers' performance by simulating various types of online advertisements. The website spams fake ads and displays multiple types of test pages, such as a legitimate promotional page and a fake virus warning, to see how effective different ad blockers are.

This project is meant for educational purposes only and allows users to test how well their ad blockers can identify and block ads. It also contains examples of websites that are often blocked by ad blockers, including both harmless and simulated "malicious" pages.

## Features

- **Simulated Ads**: Fake ads that look like real banners, popups, and redirects.
- **Ad Blocker Testing**: Tests how well your ad blocker performs by spamming ads across various test pages.
- **Promoted Websites**: Fake landing pages to test how ad blockers handle promoted content.
- **Fake Virus Warnings**: Mimics scammy "virus warning" pages that are commonly used in malicious ads.

## Folder Structure

ADBlocker-Tester/ ├── index.html # The main landing page of the site. ├── icon.png # Favicon used across the site. ├── css/ │ └── style.css # Styles for the website. ├── js/ │ ├── script.js # Main script to generate fake ads and handle user interaction. │ ├── tracker.js # Tracks interactions for testing. │ └── adsense-fake.js # Simulates fake Google AdSense ads. ├── ads/ │ ├── ad1.png # Fake ad image used in promotional page. │ ├── ad2.png # Fake ad image used in virus warning page. │ ├── ad3.png # Another fake ad image. └── html/ ├── learn-more.html # Information page about ad blockers. ├── recommended.html # List of recommended ad blockers. └── adsites/ ├── adsite1.html # Fake promoted website (test ad). ├── adsite2.html # Fake virus warning (test ad). └── adsite3.html # Another fake promoted website (test ad).

bash
Copy
Edit

## Installation

### Prerequisites

To set up and run the project, you need:

- A web browser (e.g., Chrome, Firefox)
- [Git](https://git-scm.com/) for cloning the repository
- A GitHub account if you plan to host the site on GitHub Pages

### Steps to Run Locally

1. **Clone the Repository**:  
   Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/BlobbyOfficial/AdBlocker-Tester.git
