export const Location = async () => {
    return fetch('https://api.ipify.org/?format=json').then((responce) =>
        responce.json()
    );
};

export const Country = async (ip:string)=>{
    const response= await fetch('http://ip-api.com/json/'+ip)
        .then((r)=>r.json())
        .then((data)=>data.countryCode);

    return response
}