(()=>{const e=document.getElementById("container"),t=document.getElementById("main"),n=document.getElementById("section"),a=function(){const e=e=>JSON.parse(localStorage.getItem(e))||[];return{add:(t,n)=>{let a=e(t);a.push(n),localStorage.setItem(t,JSON.stringify(a))},get:e}}();function d(r,s,v,m){const u=a.get(s);e.innerHTML="",t.innerHtml="",n.innerHTML=u.map(v).join(""),t.innerHTML=r(),t.append(n),e.innerHTML='\n    <aside>\n        <div class="title">\n            <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" d="M23.43 5.394 11.723 19.215l-1.093-.05L6 12.574l1.131-.795 4.116 5.86L22.375 4.5l1.055.894Z" clip-rule="evenodd"></path>\n                        <path\n                            fill-rule="evenodd"\n                            d="m10.851 13.161 6.579-7.767-1.055-.894-6.345 7.491.821 1.17Zm-2.325.604.822 1.17-.82-1.17h-.002Zm-2.425 2.866.82 1.17-1.199 1.414-1.092-.05L0 12.574l1.131-.795 4.116 5.86.855-1.008H6.1Z"\n                            clip-rule="evenodd"></path>\n                    </svg>\n                    <p>To-Do List</p>\n                </div>\n\n                <div id="projectBtn">\n                    <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                        <path\n                            fill-rule="evenodd"\n                            d="M2.25 1.5h19.5l.75.75v19.5l-.75.75H2.25l-.75-.75V2.25l.75-.75ZM3 21h18V3H3v18ZM4.5 4.5h3v15h-3v-15Zm9 0h-3v9h3v-9Zm3 0h3v12h-3v-12Z"\n                            clip-rule="evenodd"></path>\n                    </svg>\n                    <p>Projects</p>\n                </div>\n\n                <div id="taskBtn">\n                    <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                        <path\n                            fill-rule="evenodd"\n                            d="M4.32 5.88a.6.6 0 0 0-.6.6v1.2a.6.6 0 0 0 .6.6h1.2a.6.6 0 0 0 .6-.6v-1.2a.6.6 0 0 0-.6-.6h-1.2Zm1.2.6h-1.2v1.2h1.2v-1.2Z"\n                            clip-rule="evenodd"></path>\n                        <path\n                            d="M7.92 7.08a.6.6 0 0 1 .6-.6h10.8a.6.6 0 1 1 0 1.2H8.52a.6.6 0 0 1-.6-.6Zm.6 4.2a.6.6 0 1 0 0 1.2h10.8a.6.6 0 1 0 0-1.2H8.52Zm0 4.8a.6.6 0 1 0 0 1.2h10.8a.6.6 0 1 0 0-1.2H8.52Z"></path>\n                        <path\n                            fill-rule="evenodd"\n                            d="M3.72 11.28a.6.6 0 0 1 .6-.6h1.2a.6.6 0 0 1 .6.6v1.2a.6.6 0 0 1-.6.6h-1.2a.6.6 0 0 1-.6-.6v-1.2Zm.6 0h1.2v1.2h-1.2v-1.2Zm0 4.2a.6.6 0 0 0-.6.6v1.2a.6.6 0 0 0 .6.6h1.2a.6.6 0 0 0 .6-.6v-1.2a.6.6 0 0 0-.6-.6h-1.2Zm1.2.6h-1.2v1.2h1.2v-1.2Z"\n                            clip-rule="evenodd"></path>\n                    </svg>\n                    <p>Tasks</p>\n                </div>\n    </aside>\n\n    ',e.append(t),function(){const e=document.getElementById("projectBtn"),t=document.getElementById("taskBtn");e.addEventListener("click",(e=>d(o,"project",c,p))),t.addEventListener("click",(e=>d(i,"task",l,h)))}(),m()}function o(){return'\n    <div>\n        <div class="header__div">\n            <div>\n                <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                    <path\n                        fill-rule="evenodd"\n                        d="M2.25 1.5h19.5l.75.75v19.5l-.75.75H2.25l-.75-.75V2.25l.75-.75ZM3 21h18V3H3v18ZM4.5 4.5h3v15h-3v-15Zm9 0h-3v9h3v-9Zm3 0h3v12h-3v-12Z"\n                        clip-rule="evenodd"></path>\n                </svg>\n                <h2>Projects</h2>\n            </div>\n            <input type="search" name="project" id="projectSearch" placeholder="Search" />\n            <button id="createProject">Create Project</button>\n        </div>\n        <p>Boost Your Productivity: Streamline Tasks into Projects! Here\'s Your list Projects</p>\n    <dialog id="project_dialog" class="project__dialog">\n        <form action="." method="post"  id="add_project">\n            <div>\n                <input type="text" name="name" id="name" placeholder="Name of the Project...." />\n                <input type="date" name="date" id="date" placeholder="Date" />\n            </div>\n            <input type="text" name="description" id="description" placeholder="Short description" />\n            <div>\n                <button id="create_project_btn" class="cproject__btn">Create</button>\n                <button id="cancel_project_btn" class="cancel__project">Cancel</button>\n            </div>\n        </form>\n    </dialog>\n    </div>\n    '}function i(){return'\n            <div>\n            <div class="header__div">\n                <div>\n                    <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                        <path\n                            fill-rule="evenodd"\n                            d="M4.32 5.88a.6.6 0 0 0-.6.6v1.2a.6.6 0 0 0 .6.6h1.2a.6.6 0 0 0 .6-.6v-1.2a.6.6 0 0 0-.6-.6h-1.2Zm1.2.6h-1.2v1.2h1.2v-1.2Z"\n                            clip-rule="evenodd"></path>\n                        <path\n                            d="M7.92 7.08a.6.6 0 0 1 .6-.6h10.8a.6.6 0 1 1 0 1.2H8.52a.6.6 0 0 1-.6-.6Zm.6 4.2a.6.6 0 1 0 0 1.2h10.8a.6.6 0 1 0 0-1.2H8.52Zm0 4.8a.6.6 0 1 0 0 1.2h10.8a.6.6 0 1 0 0-1.2H8.52Z"></path>\n                        <path\n                            fill-rule="evenodd"\n                            d="M3.72 11.28a.6.6 0 0 1 .6-.6h1.2a.6.6 0 0 1 .6.6v1.2a.6.6 0 0 1-.6.6h-1.2a.6.6 0 0 1-.6-.6v-1.2Zm.6 0h1.2v1.2h-1.2v-1.2Zm0 4.2a.6.6 0 0 0-.6.6v1.2a.6.6 0 0 0 .6.6h1.2a.6.6 0 0 0 .6-.6v-1.2a.6.6 0 0 0-.6-.6h-1.2Zm1.2.6h-1.2v1.2h1.2v-1.2Z"\n                            clip-rule="evenodd"></path>\n                    </svg>\n                    <h2>Tasks</h2>\n                </div>\n                <input type="search" name="project" id="projectSearch" placeholder="Search" />\n                <button id="create_task">Create Task</button>\n            </div>\n            <p>Get ready to tackle all the tasks you\'re working on!</p>\n            <dialog id="task_dialog" class="project__dialog">\n                <form action="." method="post" id="add_project">\n                    <div>\n                        <input type="text" name="task" id="task" placeholder="The task...." />\n                        <input type="date" name="date" id="date" placeholder="Date" />\n                    </div>\n                    <select name="project" id="project_select">\n                        <option value="" disabled selected>Choose the project</option>\n                    </select>\n                    <div>\n                        <button id="create_task_btn" class="cproject__btn">Create</button>\n                        <button id="cancel_task_btn" class="cancel__project">Cancel</button>\n                    </div>\n                </form>\n            </dialog>\n        </div>\n    '}function c(e){return e?`\n     <div class="project">\n        <div>\n            <h3>${e.name}</h3>\n            <p>${e.date}</p>\n        </div>\n        <p>${e.description}</p>\n    </div>\n`:""}function l(e){if(!e)return"";const t=a.get("project").filter((t=>t.id==e.project))[0];return`\n    <div class="project">\n        <div>\n            <h3>${e.task}</h3>\n            <p>${e.date}</p>\n        </div>\n        <p>${t.name}</p>\n    </div>\n    `}function r(e,t,n){this.id=Date.now(),this.name=e,this.description=t,this.date=n}function p(){const e=document.getElementById("createProject"),t=document.getElementById("project_dialog"),n=document.getElementById("create_project_btn"),a=document.getElementById("cancel_project_btn");e.addEventListener("click",(e=>{t.open||t.showModal()})),n&&n.addEventListener("click",(e=>{t.close(),e.preventDefault(),v(r,"project","name","description","date"),d(o,"project",c,p)})),a&&a.addEventListener("click",(e=>{e.preventDefault(),t.close()}))}function s(e,t,n){this.task=e,this.date=t,this.project=n}function h(){const e=document.getElementById("create_task"),t=document.getElementById("task_dialog"),n=document.getElementById("create_task_btn"),o=document.getElementById("cancel_task_btn"),c=document.getElementById("project_select");if(e.addEventListener("click",(e=>{t.open||t.showModal()})),c){let e=a.get("project");c.append(...e.map((e=>{const t=document.createElement("option");return t.value=e.id,t.textContent=e.name,t})))}n&&n.addEventListener("click",(e=>{t.close(),e.preventDefault(),v(s,"task","task","date","project"),d(i,"task",l,h)})),o&&o.addEventListener("click",(e=>{e.preventDefault(),t.close()}))}function v(e,t,...n){const d=new FormData(document.forms.add_project),o=new e(...n.map((e=>d.get(e))));a.add(t,o)}d(o,"project",c,p)})();