

export class UtilsService{

  getIdFromURL(URL: string){
    var str = URL;
    var len = str.length;
    var array = str.split("/");
    var res = array[array.length-2];
    return res;
  }

}
