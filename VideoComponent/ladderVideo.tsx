import Youtube from 'react-youtube';
import "../styles/video.module.scss";

export default function LadderVideo() {
    const opts = {
        playerVars: {
        width: '640',
        height: '360',
      }, 
    }
    return (
            <Youtube 
                videoId= "kbWGclLiWhQ"//挿入したいyoutube動画のURL末尾を入力
                opts={opts}
            />
    );
  }