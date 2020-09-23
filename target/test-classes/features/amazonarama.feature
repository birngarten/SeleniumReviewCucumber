Feature: Amazon Urun Arama
  @amazonurunarama
  Scenario Outline: TC06_kullanici amazonda urun armasi yapar
    Given kullanici "https://amazon.com" sayfaya gider
    And kullanici aramakutusuna "<kelime>" yazar
    Then kullanici sonucsayisini ekrana yazdirir

    Examples:
      | kelime   |
      |headphones|
      |tv        |
      |tablet    |


