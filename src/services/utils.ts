

export class UtilsService{

  getIdFromURL(URL: string){
    var str = URL;
    var len = str.length;
    var array = str.split("/");
    var res = array[array.length-2];
    return res;
  }

   getMonthFormated() {
      var date = new Date(),
      month = date.getMonth()+1;
      
      return month+1 < 10 ? ("0" + month) : month;
    }

}
