package stepPack;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Hook extends AbstractClass{
	
	@Before
    public void SetUp(){
        //System.setProperty("webdriver.gecko.driver","E:\\All Driver\\geckodriver.exe");
        //driver=new FirefoxDriver();
		
		System.setProperty("webdriver.chrome.driver","C:\\ITTraining\\AllDriver\\chromedriver.exe");
		driver=new ChromeDriver();
		
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
    }
    @After
    public void teaedown(){
        driver.close();
    }

}
