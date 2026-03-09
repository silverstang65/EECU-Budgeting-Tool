const overlay = document.getElementById("overlay");
const careerTitle = document.getElementById("occupation");
//copying rey's code for a bit
function createButtons(careers) {
    careers.forEach((career, index) => {
     const button = document.createElement("button");
     button.innerHTML = `${career.Occupation}: ${career.Salary}`;
     button.setAttribute("id", `${index}`);
        button.addEventListener("click", () => {
            careerTitle.innerHTML = `Future Career: ${career.Occupation}`;
            console.log(`Selected Career: ${career.Occupation}, Salary: ${career.Salary}`);
        });
        overlay.appendChild(button);
    });
}

async function getCareers() {
    const url = "https://eecu-data-server.vercel.app/data";
    try {
        const response = await fetch(url);
        const jobs = await response.json();
        createButtons(jobs); //see above
        return jobs;
    }
    catch (error) {
        console.error("Error fetching careers data:", error);
        return [];
    }
    
}
getCareers();