function Metrics(arg1,arg2,arg3) {
  var date1 = arg1
  var date2 = arg2
  var url3 =  encodeURIComponent(arg3)
  var metrika_api_base_url = "https://api-metrika.yandex.ru/stat/v1/data?oauth_token=<my token>&ids=<my ids>&accuracy=high&date1=" + date1 + "&date2=" + date2 + "&dimensions=ym%3As%3AsearchEngine&metrics=ym%3As%3Ausers&filters=ym%3As%3AstartURLPath%3D%3D'" +url3 + "'&limit=10000";
  metrika_api_base_url = metrika_api_base_url;
  Logger.log(metrika_api_base_url);
  var responseJson=UrlFetchApp.fetch(metrika_api_base_url).getContentText();
  var response = JSON.parse(responseJson);
  var totals = response.totals[0];
  Logger.log (responseJson);
  return totals;
}
