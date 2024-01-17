const container = document.getElementById("container");
const main = document.getElementById("main");
const section = document.getElementById("section");
const storage = HandleLocalStorage();

function display(header, db_name, func) {
    const data = storage.get(db_name);
    container.innerHTML = "";
    main.innerHtml = "";
    
    section.innerHTML = data.map(func).join("");
    
    main.innerHTML = header();
    main.append(section);
    
    container.innerHTML = aside();
    container.append(main);
    asideBtn()
}

display(projectHeader, "project", projectElem);

function aside() {
    return `
    <aside>
        <div class="title">
            <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M23.43 5.394 11.723 19.215l-1.093-.05L6 12.574l1.131-.795 4.116 5.86L22.375 4.5l1.055.894Z" clip-rule="evenodd"></path>
                        <path
                            fill-rule="evenodd"
                            d="m10.851 13.161 6.579-7.767-1.055-.894-6.345 7.491.821 1.17Zm-2.325.604.822 1.17-.82-1.17h-.002Zm-2.425 2.866.82 1.17-1.199 1.414-1.092-.05L0 12.574l1.131-.795 4.116 5.86.855-1.008H6.1Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <p>To-Do List</p>
                </div>

                <div id="projectBtn">
                    <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            d="M2.25 1.5h19.5l.75.75v19.5l-.75.75H2.25l-.75-.75V2.25l.75-.75ZM3 21h18V3H3v18ZM4.5 4.5h3v15h-3v-15Zm9 0h-3v9h3v-9Zm3 0h3v12h-3v-12Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <p>Projects</p>
                </div>

                <div id="taskBtn">
                    <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            d="M4.32 5.88a.6.6 0 0 0-.6.6v1.2a.6.6 0 0 0 .6.6h1.2a.6.6 0 0 0 .6-.6v-1.2a.6.6 0 0 0-.6-.6h-1.2Zm1.2.6h-1.2v1.2h1.2v-1.2Z"
                            clip-rule="evenodd"></path>
                        <path
                            d="M7.92 7.08a.6.6 0 0 1 .6-.6h10.8a.6.6 0 1 1 0 1.2H8.52a.6.6 0 0 1-.6-.6Zm.6 4.2a.6.6 0 1 0 0 1.2h10.8a.6.6 0 1 0 0-1.2H8.52Zm0 4.8a.6.6 0 1 0 0 1.2h10.8a.6.6 0 1 0 0-1.2H8.52Z"></path>
                        <path
                            fill-rule="evenodd"
                            d="M3.72 11.28a.6.6 0 0 1 .6-.6h1.2a.6.6 0 0 1 .6.6v1.2a.6.6 0 0 1-.6.6h-1.2a.6.6 0 0 1-.6-.6v-1.2Zm.6 0h1.2v1.2h-1.2v-1.2Zm0 4.2a.6.6 0 0 0-.6.6v1.2a.6.6 0 0 0 .6.6h1.2a.6.6 0 0 0 .6-.6v-1.2a.6.6 0 0 0-.6-.6h-1.2Zm1.2.6h-1.2v1.2h1.2v-1.2Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <p>Tasks</p>
                </div>
    </aside>

    `;
}

function projectHeader() {
    return `
    <div>
        <div class="header__div">
            <div>
                <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        d="M2.25 1.5h19.5l.75.75v19.5l-.75.75H2.25l-.75-.75V2.25l.75-.75ZM3 21h18V3H3v18ZM4.5 4.5h3v15h-3v-15Zm9 0h-3v9h3v-9Zm3 0h3v12h-3v-12Z"
                        clip-rule="evenodd"></path>
                </svg>
                <h2>Projects</h2>
            </div>
            <input type="search" name="project" id="projectSearch" placeholder="Search" />
            <button id="createProject">Create Project</button>
        </div>
        <p>Boost Your Productivity: Streamline Tasks into Projects! Here's Your list Projects</p>
    <dialog id="project_dialog" class="project__dialog">
        <form action="." method="post"  id="add_project">
            <div>
                <input type="text" name="name" id="name" placeholder="Name of the Project...." />
                <input type="date" name="date" id="date" placeholder="Date" />
            </div>
            <input type="text" name="description" id="description" placeholder="Short description" />
            <div>
                <button id="create_project_btn" class="cproject__btn">Create</button>
                <button id="cancel_project_btn" class="cancel__project">Cancel</button>
            </div>
        </form>
    </dialog>
    </div>
    `;
}

function taskHeader() {}

function projectElem(data) {
    if (!data) return "";
    return `
     <div class="project">
        <div>
            <h3>${data.name}</h3>
            <p>${data.date}</p>
        </div>
        <p>${data.description}</p>
    </div>
`;
}

function taskElem() {}

function Project(name, description, date) {
    this.id = Project.count;
    Project.count++;
    this.name = name;
    this.description = description;
    this.date = date;
}
Project.count = 0;

// Project Modal

(function modalSetup() {
    const cProjectBtn = document.getElementById("createProject");
    const projectDialog = document.getElementById("project_dialog");
    const create_project = document.getElementById("create_project_btn");
    const cancel_project = document.getElementById("cancel_project_btn");

    cProjectBtn.addEventListener("click", (e) => {
        if (!projectDialog.open) projectDialog.showModal();
    });

    if (create_project) {
        create_project.addEventListener("click", (e) => {
            projectDialog.close();
            e.preventDefault();
            handleForm(Project, "project", "name", "description", "date");
            display(projectHeader, "project", projectElem);
            modalSetup();
        });
    }

    if (cancel_project) {
        cancel_project.addEventListener("click", (e) => {
            e.preventDefault();
            projectDialog.close();
        });
    }
})()

function asideBtn() {
    const projectBtn = document.getElementById("projectBtn");
    const taskBtn = document.getElementById("taskBtn");
    
    projectBtn.addEventListener("click", (e) => display(projectHeader, "project", projectElem))
    taskBtn.addEventListener("click", (e) => display(taskHeader, "task", taskElem))
};

// Local Storage and Form Handling

function handleForm(constructor, db, ...fields) {
    const data = new FormData(document.forms.add_project);
    const newObj = new constructor(...fields.map((elem) => data.get(elem)));
    storage.add(db, newObj);
}

function HandleLocalStorage() {
    const add = (db_name, data) => {
        let db = get(db_name);
        db.push(data);
        localStorage.setItem(db_name, JSON.stringify(db));
    };

    const get = (db_name) => JSON.parse(localStorage.getItem(db_name)) || [];

    return { add, get };
}
