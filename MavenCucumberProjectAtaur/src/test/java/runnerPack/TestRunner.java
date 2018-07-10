package runnerPack;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(

        features="src/test/resources/Features",
        glue="stepPack",
        tags= {"@FundTransfer, @OurWebSite", "@ValidPayeeValidAmount, @DataDriven" },
        plugin= {"pretty","html:testReport"},
    
        monochrome=true

)

public class TestRunner extends AbstractTestNGCucumberTests{
	

}
