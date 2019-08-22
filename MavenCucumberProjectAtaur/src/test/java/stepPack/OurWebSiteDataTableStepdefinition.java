package stepPack;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OurWebSiteDataTableStepdefinition extends AbstractClass {
	
	@Given("^user is on home page$")
	public void user_is_on_home_page() {
		driver.get("file:///C:/ITTraining/OurWebSite.html");
	   
	}

	@When("^user will click on facebook link$")
	public void user_will_click_on_facebook_link() {
		driver.findElement(By.partialLinkText("Faceb")).click();
	   
	}

	@Then("^user will able to see facebook page on same window$")
	public void user_will_able_to_see_facebook_page_on_same_window() {
		String title=driver.getTitle();
		System.out.println("Title is : "+title);
	    
	}

	@Then("^User will go again home page$")
	public void user_will_go_again_home_page() throws InterruptedException {
		driver.navigate().back();
		Thread.sleep(3000);
	   
	}

	
	/*@Given("^user is on SignUp  web page$")
	public void user_is_on_SignUp_web_page() {
		driver.get("file:///C:/ITTraining/OurWebSite.html");
	}*/

	@When("^user enter$")
	public void user_enter(DataTable table1) {
	    List<List<String>>data1=table1.raw();
	    driver.findElement(By.xpath("//input[1]")).sendKeys(data1.get(0).get(1));
	    driver.findElement(By.xpath("//input[2]")).sendKeys(data1.get(1).get(1));
		driver.findElement(By.xpath("//input[3]")).sendKeys(data1.get(2).get(1));
		driver.findElement(By.xpath("//input[4]")).sendKeys(data1.get(3).get(1));
		driver.findElement(By.xpath("//input[5]")).sendKeys(data1.get(4).get(1));

	    
	}

	@When("^user click on$")
	public void user_click_on(DataTable table2) {
		List<List<String>>data2=table2.raw();
		if(data2.get(1).get(0)=="Male"){
			driver.findElement(By.xpath("//input[7]")).click();
		}
		else if(data2.get(2).get(0)=="Female"){
			driver.findElement(By.xpath("//input[8]")).click();
		}
	
	    
	}

	@When("^user select$")
	public void user_select(DataTable table3) {
		List<List<String>>data3=table3.raw();
		Select monthSelect=new Select(driver.findElement(By.id("MN")));
		monthSelect.selectByVisibleText(data3.get(0).get(1));

		Select daySelect=new Select(driver.findElement(By.id("DY")));
		daySelect.selectByVisibleText(data3.get(1).get(1));

		Select yearSelect=new Select(driver.findElement(By.id("YR")));
		yearSelect.selectByVisibleText(data3.get(2).get(1));
	}


	@Then("^user will able to SignUp successfully$")
	public void user_will_able_to_SignUp_successfully() {
	    System.out.println("User able to signup successfully");
	}


}
