class Project {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }
  getString() {
    return `<div class="project">
          <h1 class="project-name">${this.name}</h1>
          <a
            href="${this.link}"
            target="_blank"
            class="project-link"
            >Visit</a
          >
        </div>`;
  }
}

icon = document.querySelector("#icon");
projectDiv = document.querySelector(".projects");
const allProjects = [];
let i = 0;
function rotateIcon() {
  icon.style.transform = `rotate(${map(Math.sin(i), -1, 1, -20, 20)}deg)`;
  i += 0.0025;
}

function clamp(input, min, max) {
  return input < min ? min : input > max ? max : input;
}
function map(current, in_min, in_max, out_min, out_max) {
  const mapped =
    ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  return clamp(mapped, out_min, out_max);
}

setInterval(rotateIcon, 1);
let projectHTML = "";
allProjects.push(
  new Project(
    "Sorting Visualizer",
    "https://shazzzaammm.github.io/SortingAlgorithmVisualizer"
  )
);
allProjects.push(
  new Project(
    "A Star Visualizer",
    "https://shazzzaammm.github.io/A-Star-Visualizer"
  )
);
allProjects.push(
  new Project("Maze Generator", "https://shazzzaammm.github.io/Maze-Generator")
);
allProjects.push(
  new Project("Smart Rockets", "https://shazzzaammm.github.io/Smart-Rockets")
);
allProjects.push(
  new Project("Wordle Clone", "https://shazzzaammm.github.io/WordleClone")
);
allProjects.push(
  new Project("Blobby", "https://shazzzaammm.github.io/Soft-Bodies")
);
allProjects.push(
  new Project(
    "20&nbsp;Go&nbsp;To 10",
    "https://shazzzaammm.github.io/20-Go-To-10"
  )
);
allProjects.push(
  new Project("Super Formula", "https://shazzzaammm.github.io/Super-Formula")
);
allProjects.push(
  new Project("2D Raycasts", "https://shazzzaammm.github.io/2D-Raycasting")
);
allProjects.push(new Project("Pong", "https://shazzzaammm.github.io/Pong"));
allProjects.push(
  new Project("Tic&nbsp;Tac Toe", "https://shazzzaammm.github.io/Tic-Tac-Toe")
);
allProjects.push(
  new Project("L-System Fractals", "https://shazzzaammm.github.io/L-Systems")
);
allProjects.push(new Project("Recursion", "index.html"));
allProjects.push(
  new Project("Cat Facts", "https://shazzzaammm.github.io/CatFacts")
);
allProjects.push(
  new Project(
    "Password Generator",
    "https://shazzzaammm.github.io/Password-Generator"
  )
);
allProjects.push(
  new Project("Matrix Text", "https://shazzzaammm.github.io/Matrix-Text")
);
allProjects.push(
  new Project(
    "Cat Meme Creator",
    "https://shazzzaammm.github.io/Cat-Meme-Generator"
  )
);
allProjects.push(new Project("Plinko", "https://shazzzaammm.github.io/Plinko"));
allProjects.push(
  new Project("Quick Draw!", "https://shazzzaammm.github.io/Quick-Draw")
);
allProjects.push(
  new Project("MS&nbsp; Paint", "https://shazzzaammm.github.io/Paint")
);
allProjects.push(
  new Project(
    "Image Classifier",
    "https://shazzzaammm.github.io/Image-Classifier"
  )
);
allProjects.push(
  new Project("Monty Hall", "https://shazzzaammm.github.io/Monty-Hall")
);
allProjects.push(
  new Project("Phyllotaxis", "https://shazzzaammm.github.io/Phyllotaxis")
);
allProjects.push(
  new Project(
    "Fake Programming",
    "https://shazzzaammm.github.io/Fake-Programming"
  )
);
allProjects.push(
  new Project(
    "QR&nbsp;Code Generator",
    "https://shazzzaammm.github.io/QR-Code-Generator"
  )
);
allProjects.forEach((p) => {
  projectHTML += p.getString();
});
projectDiv.innerHTML = projectHTML;
