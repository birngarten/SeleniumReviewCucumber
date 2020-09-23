@googleArama
Feature: Google arama
  Background: Kullanici google sayfasina gider
    Given kullanici google sayfasina gider

  @techproeducationArama
  Scenario: TC01_kullanici googleda techproeducation aramasi yapar
    And arama kutusuna techproeducation yazar
    Then arama sonuclari sayfasinin basligini kontrol eder

  @seleniumArama
  Scenario: TC02_kullanici googleda selenium aramasi yapar
    And arama kutusuna selenium yazar
    Then arama sonuclari sayfasinin sonuc sayisini kontrol eder

  @darmstadtArama
  Scenario: TC03_kullanici googleda darmstadt aramasi yapar
    And arama kutusuna darmstadt yazar
    Then arama sonuclarinin ilk linkine tiklar