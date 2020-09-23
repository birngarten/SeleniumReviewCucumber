package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.Keys;
import pages.AmazonPage;
import utilities.Driver;

public class AmazonStepDefinition {
    AmazonPage amazonPage = new AmazonPage();

    @Given("kullanici aramakutusuna {string} yazar")
    public void kullanici_aramakutusuna_yazar(String string) {
// @Given("kullanici aramakutusuna {string} yazar") ==> bu kisim ExplicitStepDefinition class'inda var
//        oradan
//        Driver.getDriver().get()         code'unu aliyor otomatik olark
        amazonPage.amazonAramaKutusu.sendKeys(string + Keys.ENTER);
    }

    @Then("kullanici sonucsayisini ekrana yazdirir")
    public void kullanici_sonucsayisini_ekrana_yazdirir() {
        System.out.println(amazonPage.sonucSayisi.getText());


    }

}
