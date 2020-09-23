$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/googlearama.feature");
formatter.feature({
  "name": "Google arama",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@googleArama"
    }
  ]
});
formatter.background({
  "name": "Kullanici google sayfasina gider",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "TC01_kullanici googleda techproeducation aramasi yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@googleArama"
    },
    {
      "name": "@techproeducationArama"
    }
  ]
});
formatter.step({
  "name": "arama kutusuna techproeducation yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleAramaStepDefinitions.arama_kutusuna_techproeducation_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "arama sonuclari sayfasinin basligini kontrol eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleAramaStepDefinitions.arama_sonuclari_sayfasinin_basligini_kontrol_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Kullanici google sayfasina gider",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "TC02_kullanici googleda selenium aramasi yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@googleArama"
    },
    {
      "name": "@seleniumArama"
    }
  ]
});
formatter.step({
  "name": "arama kutusuna selenium yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleAramaStepDefinitions.arama_kutusuna_selenium_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "arama sonuclari sayfasinin sonuc sayisini kontrol eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleAramaStepDefinitions.arama_sonuclari_sayfasinin_sonuc_sayisini_kontrol_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Kullanici google sayfasina gider",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "TC03_kullanici googleda darmstadt aramasi yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@googleArama"
    },
    {
      "name": "@darmstadtArama"
    }
  ]
});
formatter.step({
  "name": "arama kutusuna darmstadt yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleAramaStepDefinitions.arama_kutusuna_darmstadt_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "arama sonuclarinin ilk linkine tiklar",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleAramaStepDefinitions.arama_sonuclarinin_ilk_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
});