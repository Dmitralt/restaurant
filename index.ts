var requestify = require('requestify');

const  exeption="error"
class APIRequests {


  private address;
  
  public curent_marker;
  constructor(address) {

    this.address = address;
   
  }

  public async getmarker(user_id: string, user_secret: string) {
    try {
      let a = await requestify.get(this.address + '/auth/access_token?user_id=' + user_id + '&user_secret=' + user_secret)
      return (a.getBody())
    } catch{ return exeption }
  }

  public async setcurentmarker(user_id: string, user_secret: string) {
    try {
      let a = await requestify.get(this.address + '/auth/access_token?user_id=' + user_id + '&user_secret=' + user_secret)
      this.curent_marker = a.getBody();
      return "done"
    } catch{ return exeption }
  }

  //https://iiko.biz:9900/api/0/nomenclature/0beff7b8-8f87-11ea-80f4-d8d38565926f?access_token=X4XMwv6gBmWWUcvatJaKILUs0mEzilxByH8N23FXQMKRhk1Bfv18OA0sH9bsBSqCMORIHQ_Db8HR2zooV2pJ9g2
 // /api/0/nomenclature/{organizationId}?access_token={accessToken}

  //НОМЕНКЛАТУРА
  
  //0beff7b8-8f87-11ea-80f4-d8d38565926f -organisationid
  public async getnomenclature(organisation_id:string,accessToken:string) {
    try {
      let a = await requestify.get(this.address +"/nomenclature/"+organisation_id+"?access_token="+accessToken )
      return (a.getBody())
    } catch{ return exeption }
  }
  public async getgroups(organisation_id:string,accessToken:string) {
    try {
      let a = await requestify.get(this.address +"/nomenclature/"+organisation_id+"?access_token="+accessToken )
      return (a.getBody()["groups"])
    } catch{ return exeption }
  }
  public async getproductCategories(organisation_id:string,accessToken:string) {
    try {
      let a = await requestify.get(this.address +"/nomenclature/"+organisation_id+"?access_token="+accessToken )
      return (a.getBody()["productCategories"])
    } catch{ return exeption }
  }
  public async getproducts(organisation_id:string,accessToken:string) {
    try {
      let a = await requestify.get(this.address +"/nomenclature/"+organisation_id+"?access_token="+accessToken )
      return (a.getBody()["products"])
    } catch{ return exeption }
  }
  public async getrevision(organisation_id:string,accessToken:string) {
    try {
      let a = await requestify.get(this.address +"/nomenclature/"+organisation_id+"?access_token="+accessToken )
      return (a.getBody()["revision"])
    } catch{ return exeption }
  }
  public async getuploadDate(organisation_id:string,accessToken:string) {
    try {
      let a = await requestify.get(this.address +"/nomenclature/"+organisation_id+"?access_token="+accessToken )
      return (a.getBody()["uploadDate"])
    } catch{ return exeption }
  }

  ///api/0/cities/cities?access_token={accessToken}&organization={organizationId}
//города
public async getcities(organisation_id:string,accessToken:string) {
  try {
    let a = await requestify.get(this.address +"/cities/cities?access_token="+accessToken+"&organization="+organisation_id )
    return (a.getBody())
  } catch{ return exeption }
}
public async getcitiesoforganisation(organisation_id:string,accessToken:string) {
  try {
    let a = await requestify.get(this.address +"/cities/citiesList?access_token="+accessToken+"&organization="+organisation_id )
    return (a.getBody())
  } catch{ return exeption }
}
///api/0/streets/streets?access_token={accessToken}&organization={organizationId}&city={cityId}

//улицы
public async getstreets(organisation_id:string,accessToken:string,cityId:string) {
  try {
    let a = await requestify.get(this.address +"/streets/streets?access_token="+accessToken+"&organization="+organisation_id+"&city="+cityId )
    return (a.getBody())
  } catch{ return exeption }
}
///api/0/regions/regions?access_token={accessToken}&organization={organizationId}
//регионы
public async getregions(organisation_id:string,accessToken:string) {
  try {
    let a = await requestify.get(this.address +"/regions/regions?access_token="+accessToken+"&organization="+organisation_id )
    return (a.getBody())
  } catch{ return exeption }
}


// /api/0/orders/deliveryHistoryByPhone?access_token={accessToken}&organization={organizationId}&phone={phoneNumber}
//История доставочных заказов по номеру телефона
public async getdeliveryHistoryByPhone(organisation_id:string,accessToken:string,phoneNumber:string) {
  try {
    let a = await requestify.get(this.address +"/orders/deliveryHistoryByPhone?access_token="+accessToken+"&organization="+organisation_id+"&phone="+phoneNumber )
    return (a.getBody())
  } catch{ return exeption }
}


// /api/0/orders/get_courier_orders?access_token={accessToken}&organization={organizationId}&courier={courierId}&request_timeout={requestTimeout}
//Получить все заказы курьера

public async getget_courier_orders(organisation_id:string,accessToken:string,courierId:string,requestTimeout:string) {
  try {
    let a = await requestify.get(this.address +"/orders/get_courier_orders?access_token="+accessToken+"&organization"+organisation_id+"&courier="+courierId+"&request_timeout="+requestTimeout )
    return (a.getBody())
  } catch{ return exeption }
}
}


async function WorkFunction() {
  let a = new APIRequests("https://iiko.biz:9900/api/0");
  await a.setcurentmarker("publicistAPI", "tRxa25T1P9")

  let marker = a.curent_marker

  let nomenclature=await a.getnomenclature("0beff7b8-8f87-11ea-80f4-d8d38565926f",marker)
  let cities=await a.getcities("0beff7b8-8f87-11ea-80f4-d8d38565926f",marker)
  console.log(cities)

}

WorkFunction();