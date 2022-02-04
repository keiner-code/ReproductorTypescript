export interface Ad{
    imageUrl: string,
    title: string,
    body: string,
    url: string
}

const ALL_ADS: Ad[] = [
    {
        imageUrl: 'https://static.platzi.com/media/',
        title: 'Curso Profesional javascripts',
        body: 'Domina javascripts y Typescript',
        url: '',
    },
    {
        imageUrl: 'https://static.platzi.com/media/22',
        title: 'Curso FronEnd javascripts',
        body: 'Domina javascripts',
        url: '',
    },
    {
        imageUrl: 'https://static.platzi.com/media/we',
        title: 'Curso Profesional python',
        body: 'Domina python',
        url: '',
    }
]

class Ads{
    private static instance: Ads;
    private ads: Ad[];

    private constructor(){
        this.initAds();
    }

    static getInstance(){
        if(!Ads.instance){
            Ads.instance = new Ads();  
          }
          return Ads.instance;
    }
    private initAds(){
        this.ads = [...ALL_ADS];
    }

    getAd(){
        if(this.ads.length === 0){
            this.initAds();
        }
        return this.ads.pop();
    }
}

export default Ads;