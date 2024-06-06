let reposInput = document.querySelector(".repos-input"),
reposButton = document.querySelector(".repos-button"),
repostResult = document.querySelector(".repos-answer");

reposButton.onclick = function () {
    if (reposInput.value === "") {
        repostResult.innerHTML = "<span>Please Write Githup Username</span>"
        }else{
            fetch(`https://api.github.com/users/${reposInput.value}/repos`)
            .then((reposity) => {
                return reposity.json();
            })
            .then((repos)=>{
                if (repos.length === 0) {
                    repostResult.innerHTML = "<span>Please Write The Right UserName</span>";
                    reposInput.value="";
                }else{
               repostResult.innerHTML = "";
               reposInput.value="";
               repos.forEach(repo => {
                   let MainDiv = document.createElement("div");
                   MainDiv.classList.add("mainDiv");
                   let paraDiv = document.createElement("p");   
                   let nameOfRapo = document.createTextNode(repo.name);
                   paraDiv.appendChild(nameOfRapo);
                   MainDiv.appendChild(paraDiv);
                   let subDiv = document.createElement("div");
                   let CreateVisitBtn = document.createElement("a");
                   let VisitText = document.createTextNode("visit");
                   CreateVisitBtn.appendChild(VisitText);
                   CreateVisitBtn.href=`https://github.com/${reposInput.value}/${repo.name}`;
                   CreateVisitBtn.setAttribute("target","_blank");
                   subDiv.appendChild(CreateVisitBtn);
                   let spanStars = document.createElement("span");
                   let textStars = document.createTextNode(`The Stars is ${repo.stargazers_count}`);
                   spanStars.appendChild(textStars);
                   spanStars.classList.add("box")
                   subDiv.append(spanStars);
                   MainDiv.appendChild(subDiv);
                   repostResult.appendChild(MainDiv);
            });

            }})
        }
}