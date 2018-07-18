package stepPack;

import org.openqa.selenium.By;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BMICalculaterStepDefinition extends AbstractClass{
	
	@Given("^I am on BMI Calculater Webpage$")
	public void i_am_on_BMI_Calculater_Webpage() throws InterruptedException {
	    driver.get("file:///C:/ITTraining/WebSite/JavaScript/BMI.html");
	   
	}

	@When("^I enter Height in Centimiters \"([^\"]*)\" and Weight in Kilograms \"([^\"]*)\"$")
	public void i_enter_Height_in_Centimiters_and_Weight_in_Kilograms(String height, String weight) {
		
		driver.findElement(By.id("heightCMS")).sendKeys(height);
		driver.findElement(By.id("weightKg")).sendKeys(weight);
		
	    
	}

	@When("^I click on calculate button$")
	public void i_click_on_calculate_button() throws InterruptedException {
	   driver.findElement(By.id("Calculate")).click();
	   Thread.sleep(4000);
	}

	@Then("^I should get BMI value \"([^\"]*)\"$")
	public void i_should_get_BMI_value(String BMIValue) {
		String actualValue=driver.findElement(By.id("bmi")).getAttribute("value");
		Assert.assertEquals(actualValue, BMIValue);
	
	}

	@Then("^I should get BMI Category \"([^\"]*)\"$")
	public void i_should_get_BMI_Category(String category) {
		String actualCategory=driver.findElement(By.id("bmi_category")).getAttribute("value");
		Assert.assertEquals(actualCategory, category);
	}



}
