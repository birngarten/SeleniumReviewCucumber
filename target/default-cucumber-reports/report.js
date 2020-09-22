$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/googlearamaparametre.feature");
formatter.feature({
  "name": "Parametreli Arama",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TC03_kullanici googleda arama yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@webdriverArama"
    }
  ]
});
formatter.step({
  "name": "kullanici google sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GoogleAramaStepDefinitions.kullanici_google_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"webdriver\" kelimesi arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleAramaStepDefinitions.kullanici_kelimesi_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sayfa basliginda \"webdriver\" kelimesini kontrol eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleAramaStepDefinitions.kullanici_sayfa_basliginda_kelimesini_kontrol_eder(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});