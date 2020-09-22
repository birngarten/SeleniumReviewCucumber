package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class GooglePage {

    public GooglePage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(name = "q")
    public WebElement aramaKutusu;

    @FindBy(id = "result-stats")
    public WebElement sonucSayisi;

    @FindBy(xpath = "(//span[@class='RveJvd snByac'])[3]")
    public WebElement iStimmeZu;

}
