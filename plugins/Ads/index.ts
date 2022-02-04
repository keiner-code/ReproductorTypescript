import MediaPlayer from '../../assets/MediaPlayer';
import Ads, {Ad} from './ads';

class AdsPlugin{
    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd: Ad;
    private adsContainer: HTMLElement;

    constructor(){
        this.ads = Ads.getInstance();
        this.adsContainer = document.createElement('div');
        this.handlerTimeUpdate = this.handlerTimeUpdate.bind(this);
    }


    run(player: MediaPlayer){
        this.player = player;
        this.player.container.appendChild(this.adsContainer);
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handlerTimeUpdate);
    }
    private handlerTimeUpdate(){
        const currenTime = Math.floor(this.media.currentTime);
        if(currenTime % 30 === 0){
            this.renderAd();
        }
    }
    private renderAd(){
        if(this.currentAd){
            return;
        }
        const ad = this.ads.getAd();
        this.currentAd = ad;
        this.adsContainer.innerHTML = `
            <div class="ads">
                <a class="ads__link" href="${this.currentAd.url}" target="_black">
                    <img class="ads_img" src"${this.currentAd.imageUrl}" />
                    <div class="ads__info">
                        <h5 class="ads__body">${this.currentAd.body}</h5>
                        <p class="ads__body">${this.currentAd.body}</p>
                    </div>
                </a>
            </div>
            `;
            setTimeout(()=>{
                this.currentAd = null;
                this.adsContainer.innerHTML='';
            },10000);
    }
}
export default AdsPlugin;