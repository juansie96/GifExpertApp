async function getGifs(category) {
    const apiKey = "mjWGNSSOiOjn2D99jTbQjhx4QLl1KnYJ";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q='${encodeURI(category)}'&limit=12`;
    const response = await fetch(url);
    const {
        data
    } = await response.json();

    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url,
        };
    });
    
    return gifs;
};

export default getGifs;