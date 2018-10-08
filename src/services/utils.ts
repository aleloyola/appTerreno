

export class UtilsService{

  getIdFromURL(URL: string){
    var str = URL;
    var len = str.length;
    var res = str.substring(len-2, len-1);
    return res;
  }
  
}
