function navigate(id) {
    let activePages = document.getElementsByClassName('active')
    for (let page of activePages) {
        page.classList.remove('active')
    }
    let newPage = document.getElementById(id)
    newPage.classList.add('active')
}

function changeTheme() {
    const themeStyle = Array.from(document.styleSheets).find(styleSheet =>
        styleSheet.href.includes('theme'))

    if (themeStyle !== undefined) {
        const ownerNode = themeStyle.ownerNode
        ownerNode.parentNode.removeChild(ownerNode);
        return;
    }

    const newStyle = document.createElement('link')
    newStyle.rel = 'stylesheet';
    newStyle.type = 'text/css';
    newStyle.href = 'css/theme.css';
    document.getElementsByTagName('head')[0].appendChild(newStyle);
}