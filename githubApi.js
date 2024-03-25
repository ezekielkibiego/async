const username = 'your username';
const token = 'Your token'

async function fetchData(username, token) {
    try {
        const url = `https://api.github.com/users/${username}/repos`
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }

}

function renderRepos(repositories) {
    const repoContainer = document.getElementById('repositories');
    repositories.forEach(repository => {
        const repoElement = document.createElement('div');
        repoElement.innerHTML = `<strong>${repository.name}</strong>: ${repository.description}`;
        repoContainer.appendChild(repoElement);
    })
}

fetchData(username, token)
    .then(data => {
        renderRepos(data)
    })
    .catch(error => {
        console.error('Error', error);
    });