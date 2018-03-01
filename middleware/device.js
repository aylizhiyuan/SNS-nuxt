/**
 * Created by hama on 2017/12/26.
 */
export default function({isServer, route, redirect, req}) {
  let system = {
    windows:false,
    macOS:false,
    linux:false
  };
  let userAgent,isPC;
  if(isServer){
    userAgent = req.headers['user-agent'].toLowerCase();
  }else{
    userAgent = window.navigator.userAgent.toLowerCase();
  }
  //console.log(userAgent);
  system.windows = (/win/g).test(userAgent);
  system.macOS = (/macintosh/g).test(userAgent);
  system.linux = (/x11/g).test(userAgent) || ((/linux/g).test(userAgent) && !(/android/g).test(userAgent));
  isPC = system.windows || system.macOS || system.linux;

  if(isPC){
    if((/m[-]*[\w]*/g).test(route.name)){
      //redirect path from '/m/{PATH}' to '/{PATH}';
      redirect(route.fullPath.slice(2));
    }
  }else{
    if(!(/m[-]*[\w]*/g).test(route.name)){
      //redirect path from '/{PATH}' to '/m/{PATH}';
      redirect('/m'+route.fullPath);
    }
  }
}
