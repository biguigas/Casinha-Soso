document.addEventListener("DOMContentLoaded", () => {
    const items = [
        { name: 'Kit Banheiro', link: 'https://br.shp.ee/KxJpq8i', image: 'hello-kitty-poster.png' },
        { name: 'Utensílios Cozinha', link: 'https://br.shp.ee/CboUKo5', image: 'hello-kitty-poster.png' },
        { name: 'Porta Tempeiro', link: 'https://br.shp.ee/RecGDqk', image: 'hello-kitty-poster.png' },
        { name: 'Escorredor de Louça', link: 'https://br.shp.ee/i7hDNwE', image: 'hello-kitty-poster.png' },
        { name: 'Cortina de Cozinha', link: 'https://br.shp.ee/nqFvD4n', image: 'hello-kitty-poster.png' },
        { name: 'Kit Tapete Cozinha', link: 'https://br.shp.ee/MdunR2D', image: 'hello-kitty-poster.png' },
        { name: 'Kit Talher', link: 'https://a.co/d/2IIYqw5', image: 'hello-kitty-poster.png' },
        { name: 'Jarra', link: 'https://br.shp.ee/J9oCtdx', image: 'hello-kitty-poster.png' },
        { name: 'Toalha de Rosto', link: 'https://br.shp.ee/n6fHMaQ', image: 'hello-kitty-poster.png' },
        { name: 'Porta Bucha', link: 'https://br.shp.ee/gFJkzfh', image: 'hello-kitty-poster.png' },
        { name: 'Potes', link: 'https://br.shp.ee/KUX1A9i', image: 'hello-kitty-poster.png' },
        { name: 'Prateleira para Cozinha', link: 'https://br.shp.ee/cbBSHwu', image: 'hello-kitty-poster.png' },
        { name: 'Mop de Limpeza', link: 'https://br.shp.ee/kFXFrkB', image: 'hello-kitty-poster.png' },
        { name: 'Panela de Pressão 1', link: 'https://br.shp.ee/hGijJB7', image: 'hello-kitty-poster.png' },
        { name: 'Panela de Pressão 2', link: 'https://br.shp.ee/4EsBwNM', image: 'hello-kitty-poster.png' }
    ];

    const itemList = document.getElementById('itemList');

    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a href="${item.link}" target="_blank">
                <img src="${item.image}" alt="${item.name}">
                <span>${item.name}</span>
            </a>
        `;
        itemList.appendChild(listItem);
    });
});
