const dom_strings = {
    /* THEME DOM STRINGS */     
    color_switcher: document.getElementById('color-switcher'),
    switcher_icon: document.getElementById('switcher-icon'),
    theme_name: document.getElementById('theme-name'),
    repos_container: document.getElementById('repos-container'),
    body: document.getElementById('body'),
    main: document.getElementById('main'),

    /* SEARCH SECTION DOM STRINGS */ 
    search_input: document.getElementById('search-input'),
    search_btn: document.getElementById('search-btn'),

    /* DOM STRINGS FOR USER INFO */
    profile_img: document.getElementById('img-profile'),
    name: document.getElementById('name'),
    company: document.getElementById('company'),
    created_at: document.getElementById('created-at'),
    bio: document.getElementById('bio'),
    repos: document.getElementById('repos'),
    followers: document.getElementById('followers'),
    following: document.getElementById('following'),
    location: document.getElementById('location'),
    git_url: document.getElementById('git-url'),
    twitter: document.getElementById('twitter'),
    company_second: document.getElementById('company-second')
    
}

const updateUserUI = (userData, domStrings) => {
    domStrings.profile_img.src = userData.avatar_url;
    domStrings.name.innerText = userData.name;
    domStrings.company.innerText = userData.company;
    domStrings.created_at.innerText = `Joined ${userData.created_at.split('T')[0]}`;
    domStrings.bio.innerText = userData.bio === null ? 'Not Available' : userData.bio;
    domStrings.repos.innerText = userData.public_repos;
    domStrings.followers.innerText = userData.followers;
    domStrings.following.innerText = userData.following;
    domStrings.location.innerText = userData.location;
    domStrings.git_url.innerText = userData.html_url
    domStrings.twitter.innerText = userData.twitter_username === null ? 'Not Availabe' : userData.twitter_username;
    domStrings.company_second.innerText = userData.company === null ? 'Not Availabe' : userData.company ;

}

const changeTheme = () => {
    dom_strings.body.classList.toggle('white-mode');
    dom_strings.search_input.classList.toggle('white-mode');
    dom_strings.main.classList.toggle('white-mode')
    dom_strings.repos_container.classList.toggle('white-mode')
    if(dom_strings.switcher_icon.classList.contains('sun')) {
        dom_strings.switcher_icon.src = './assets/icon-moon.svg';
        dom_strings.switcher_icon.classList.remove('sun');
        dom_strings.switcher_icon.classList.add('moon');
        dom_strings.theme_name.innerText = 'DARK';
        return;
    } else {
        dom_strings.switcher_icon.src = './assets/icon-sun.svg';
        dom_strings.switcher_icon.classList.remove('moon');
        dom_strings.switcher_icon.classList.add('sun');
        dom_strings.theme_name.innerText = 'LIGHT';
    }
}

dom_strings.color_switcher.addEventListener('click', changeTheme)

dom_strings.search_btn.addEventListener('click', async (e) => {
    let url = `https://api.github.com/users/${dom_strings.search_input.value}`
    let getUser = await fetch(url).then(data => data.json());
    updateUserUI(getUser, dom_strings)
    console.log(getUser)
})