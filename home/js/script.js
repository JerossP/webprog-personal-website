function showContent(section) {
    const content = {
      about: `<p>Hello! I am Jeross Reilan R. Perez from Mandaluyong City. I love going out and I am very active when it comes to physical activities, although I am not sporty.</p>`,
      education: `<ul>
                    <li>High School: Good Shepherd Christian School (Graduated with honors)</li>
                    <li>Senior High School: Rizal Technological University (Graduated with honors)</li>
                  </ul>`,
      course: `<p>Bachelor of Science in Information Technology, specializing in Mobile and Internet Technology at Asia Pacific College.</p>`,
      experience: `<ul>
                    <li>Basic knowledge of Python</li>
                    <li>Basic knowledge of Java</li>
                    <li>Basic knowledge of Android Studio</li>
                    <li>Basic knowledge of HTML, SQL, and CSS</li>
                  </ul>`,
      hobbies: `<ul>
                  <li>Playing billiards</li>
                  <li>Playing FPS online games</li>
                  <li>Watching K-dramas, sports anime, and romcoms</li>
                  <li>Going to the gym</li>
                  <li>Night rides</li>
                </ul>`,
      goals: `<p>My goal is to graduate with a degree in IT and explore opportunities. I also aim to start a business after graduation.</p>`,
      gallery: `<div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
                  <img src="images/beach.jpg" alt="Beach Image" style="width: 200px; border-radius: 5px;">
                  <img src="images/jerox.jpg" alt="Jerox Image" style="width: 150px; border-radius: 5px;">
                  <img src="images/prom.jpg" alt="Prom Image" style="width: 150px; border-radius: 5px;">
                </div>`
    };
  
    // Update the dynamic-content section with the selected content
    document.getElementById("dynamic-content").innerHTML = content[section] || "<p>Input text here</p>";
  }
  