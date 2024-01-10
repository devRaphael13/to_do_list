function main(header, section) {
    const container = document.getElementById("container");
    const main = document.getElementById("main");

    container.innerHTML = "";
    main.innerHtml = "";

    main.innerHTML = header();
    main.append(section);

    container.innerHTML = aside();
    container.append(main);
}
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

                <div>
                    <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            d="M2.25 1.5h19.5l.75.75v19.5l-.75.75H2.25l-.75-.75V2.25l.75-.75ZM3 21h18V3H3v18ZM4.5 4.5h3v15h-3v-15Zm9 0h-3v9h3v-9Zm3 0h3v12h-3v-12Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <p>Projects</p>
                </div>

                <div>
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
            <button>Create Project</button>
        </div>
        <p>Boost Your Productivity: Streamline Tasks into Projects! Here's Your list Projects</p>
    </div>
    `;
}

function projectElem() {
    return `
     <div class="project">
        <div>
            <h3>Green Haven</h3>
            <p>12/08/2000</p>
        </div>
        <p>Project integrates renewable energy, reduces waste, and builds green spaces to create healthier, eco-friendly cities.</p>
        <div>
            <div>
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
                <p>3</p>
            </div>

            <div>
                <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.75 7.5v4.068l3.525 2.035a.75.75 0 0 1-.375 1.396.666.666 0 0 1-.375-.103l-3.9-2.25h-.019l-.037-.018-.028-.028-.029-.02-.028-.027-.018-.02c-.02-.008-.029-.027-.038-.037l-.019-.018-.018-.038-.02-.028-.018-.028a.047.047 0 0 1-.019-.038l-.018-.028c0-.01-.01-.018-.01-.037a.037.037 0 0 1-.01-.028l-.018-.038a.038.038 0 0 0-.01-.028c0-.019 0-.028-.009-.037v-.038c0-.019-.01-.028-.01-.037V7.499a.75.75 0 0 1 1.5 0Zm5.616-1.866a9.019 9.019 0 0 0-12.732 0l-.778.778-1.34-1.34a.75.75 0 0 0-.816-.17.769.769 0 0 0-.469.694v3.75a.75.75 0 0 0 .75.75h3.75a.75.75 0 0 0 .535-1.275l-1.35-1.35.778-.778a7.5 7.5 0 1 1 0 10.613.742.742 0 0 0-1.06 0 .75.75 0 0 0 0 1.06A9.002 9.002 0 1 0 18.366 5.633Z"></path>
                </svg>
                <p>1</p>
            </div>
            <div>
                <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 2.25C6.6 2.25 2.25 6.6 2.25 12S6.6 21.75 12 21.75s9.75-4.35 9.75-9.75c0-1.049-.14-2.095-.516-3.07l-1.218 1.195c.149.6.234 1.201.234 1.875A8.225 8.225 0 0 1 12 20.25 8.225 8.225 0 0 1 3.75 12 8.225 8.225 0 0 1 12 3.75c2.25 0 4.271.896 5.695 2.32l1.055-1.054C17.024 3.29 14.625 2.25 12 2.25Zm8.46 3.21L12 13.923 8.79 10.71l-1.08 1.078 3.75 3.75.54.516.54-.516 9-9-1.08-1.078Z"></path>
                </svg>
                <p>2</p>
            </div>
        </div>
    </div>
`;
}

const section = document.getElementById("section");
section.innerHTML = projectElem()

main(projectHeader, section);
