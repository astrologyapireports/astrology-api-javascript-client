class ApiReportsClient{
  constructor(uid, key) {
    this.UserID = uid;
    this.ApiKey = key;
    this.ApiLanguage = "en";
    this.url = "https://json.apireports.com/v1/";
  }
  
  setLanguage(lang) {
  	this.ApiLanguage = lang;
  }

  callApi(end_point,data,onComplete = function(status,data){} ) {
  	var xhr = new XMLHttpRequest();
		xhr.open("POST", this.url+""+end_point,true);

		xhr.setRequestHeader("Authorization", "Basic " + btoa(this.UserID+":"+this.ApiKey));
		xhr.setRequestHeader("Accept-Language", this.ApiLanguage);
		xhr.setRequestHeader('Content-type', 'application/json');

		xhr.onreadystatechange = function () {
	  	if (xhr.readyState === 4) { onComplete(xhr.status,xhr.responseText); }
		};
		xhr.send(JSON.stringify(data));
  }
}