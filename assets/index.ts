import MediaPlayer from "./MediaPlayer";
import AutoPlay from '../plugins/AutoPlay'
import AutoPause from '../plugins/AutoPause';
import Ads from "../plugins/Ads";

const video = document.querySelector("video");
const button: HTMLElement = document.querySelector("button");
const mute: HTMLElement = document.getElementById('mute');


const player = new MediaPlayer({el: video,
     plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});
button.onclick  = () => player.togglePlay();
mute.onclick = () => {
    if(player.media.muted){
        player.unmute();
    }else{
        player.mute();
    }
}

/* if('serviceWorker' in navigator){
    const url = URL('/sw.js')
    navigator.serviceWorker.register(url).catch(error =>{
        console.log(error.message);
    });
} */