export const addCosmetic = async (cosmeticObject) => {
    const postOptions = {
        method: "POST", 
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(cosmeticObject), 
    };

    let res = await fetch('https://fortnite-api.com/v2/cosmetics/br', postOptions);
    let cosmetic = await res.json(); 
    return cosmetic;
};
