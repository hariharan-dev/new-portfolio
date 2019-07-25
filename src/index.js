import './styles.scss';

function navigate(e) {
    if(e.target.tagName !== 'LI') {
        return;
    }
    const navs = {
        'home': { id: 'home-div'},
        'about':{id: 'about-div'},
        'projects':{id: 'projects-div'}
    };
    Object.keys(navs).forEach((nav) => {
        document.getElementById(nav).classList.remove('active-nav');
        document.getElementById(navs[nav].id).style.display = 'none';
    });
    e.target.classList.add('active-nav');
    document.getElementById(navs[e.target.id].id).style.display = 'flex';
}
document.getElementById('nav-list').addEventListener('click',navigate)