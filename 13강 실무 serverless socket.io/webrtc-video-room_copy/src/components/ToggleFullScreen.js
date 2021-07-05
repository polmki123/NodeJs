const element = document.documentElement
// 기본적으로 fullscreen을 사용하지만 없는 경우에는 webkitfullscreen을 사용한다. 
document.fullscreenEnabled = document.fullscreenEnabled 
      || document.webkitFullScreenEnabled //이건 사파리 
      || document.mozFullScreenEnabled  // 파이어폭스
      || document.msFullscreenEnabled  //이건 ms 
document.exitFullscreen = document.exitFullscreen 
      || document.webkitExitFullscreen
      || document.mozExitFullscreen
element.requestFullscreen = element.requestFullscreen // chrome
      || element.webkitFullScreen // 사파리
      || element.mozFullScreenEnabled // 파이어폭스
    
const ToggleFullScreen = () => {
  if(document.fullscreenEnabled) {
    document.fullscreenElement ||
    document.webkitFullScreenElement ||
    document.mozFullscreenElement  ||
    document.msFullscreenElement ?
    document.exitFullscreen() :
      element.requestFullscreen()
  }
}

export default ToggleFullScreen