const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


//Set default mode
window.onload = () => {
if (!body.classList.contains('dark-mode')) {
    body.classList.contains('light-mode');
    }
};

function searchProject(){
    let input=document.getElementaryById('searchBar').value.toLowerCase();
    let projects=
    document.getElementsByClassName('project');

    for(let i=0; i<projects.length;i++){
        let title=
        projects[i].getAttribute('data-title').toLowerCase();
            if(title.includes(input)){
                projects[i].style.display = "";
            } else{
                projects[i].style.display = "none";
            }
    }
}


  document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');

    // Toggle dark mode on page load based on checkbox status
    themeToggle.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('dark-mode'); // Dark mode
      } else {
        document.body.classList.remove('dark-mode'); // Light mode
      }
    });
  });

