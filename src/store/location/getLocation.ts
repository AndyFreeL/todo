export const Location = async () => {
    return fetch('https://api.ipify.org/?format=json',{
        referrerPolicy:'unsafe-url'
    }).then((responce) =>
        responce.json()
    );
};

export const Country = async (ip:string)=>{
    const response= await fetch('http://ip-api.com/json/'+ip,{
        referrerPolicy:'unsafe-url'
    })
        .then((r)=>r.json())
        .then((data)=>data.countryCode);

    return response
}
