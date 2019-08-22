$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/BMICalculator.feature");
formatter.feature({
  "name": "BMI Calculater functionality",
  "description": "  As a user I want to calculate my BMI by using BMI Calculater",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@BMICalculator"
    }
  ]
});
formatter.scenario({
  "name": "Categoty Under Weight",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BMICalculator"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on BMI Calculater Webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_am_on_BMI_Calculater_Webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Height in Centimiters \"170\" and Weight in Kilograms \"50\"",
  "keyword": "When "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_enter_Height_in_Centimiters_and_Weight_in_Kilograms(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on calculate button",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_click_on_calculate_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get BMI value \"17.3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_should_get_BMI_value(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get BMI Category \"Underweight\"",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_should_get_BMI_Category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Categoty Over Weight",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BMICalculator"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on BMI Calculater Webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_am_on_BMI_Calculater_Webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Height in Centimiters \"170\" and Weight in Kilograms \"80\"",
  "keyword": "When "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_enter_Height_in_Centimiters_and_Weight_in_Kilograms(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on calculate button",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_click_on_calculate_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get BMI value \"27.7\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_should_get_BMI_value(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get BMI Category \"Overweight\"",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_should_get_BMI_Category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Categoty Normal",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BMICalculator"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on BMI Calculater Webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_am_on_BMI_Calculater_Webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Height in Centimiters \"170\" and Weight in Kilograms \"60\"",
  "keyword": "When "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_enter_Height_in_Centimiters_and_Weight_in_Kilograms(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on calculate button",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_click_on_calculate_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get BMI value \"20.8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_should_get_BMI_value(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get BMI Category \"Normal\"",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_should_get_BMI_Category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Categoty Obesity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BMICalculator"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on BMI Calculater Webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_am_on_BMI_Calculater_Webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Height in Centimiters \"170\" and Weight in Kilograms \"90\"",
  "keyword": "When "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_enter_Height_in_Centimiters_and_Weight_in_Kilograms(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on calculate button",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_click_on_calculate_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get BMI value \"31.1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_should_get_BMI_value(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get BMI Category \"Obesity\"",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculaterStepDefinition.i_should_get_BMI_Category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/FuTransfer.feature");
formatter.feature({
  "name": "Fund Transfer functionality",
  "description": "  As a user I want to transfer fund to my friends and family",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FundTransfer"
    }
  ]
});
formatter.scenario({
  "name": "Valid payee and Valid Amount",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FundTransfer"
    },
    {
      "name": "@ValidPayeeValidAmount"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on fund transfer web page",
  "keyword": "Given "
});
formatter.match({
  "location": "FTransferStepDefinition.i_am_on_fund_transfer_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid payee \"Jim\" and valid amount \"500\"",
  "keyword": "When "
});
formatter.match({
  "location": "FTransferStepDefinition.i_enter_valid_payee_and_valid_amount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FTransferStepDefinition.i_click_on_Transfer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get success message \"$500 transferred successfully to Jim!!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FTransferStepDefinition.i_should_get_success_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid payee and Invalid Amount",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FundTransfer"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on fund transfer web page",
  "keyword": "Given "
});
formatter.match({
  "location": "FTransferStepDefinition.i_am_on_fund_transfer_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid payee \"Jim\" and invalid amount \"6000\"",
  "keyword": "When "
});
formatter.match({
  "location": "FTransferStepDefinition.i_enter_valid_payee_and_invalid_amount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FTransferStepDefinition.i_click_on_Transfer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get fail message \"Transfer failed!! account cannot be overdrawn\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FTransferStepDefinition.i_should_get_fail_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid payee and Valid Amount",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FundTransfer"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on fund transfer web page",
  "keyword": "Given "
});
formatter.match({
  "location": "FTransferStepDefinition.i_am_on_fund_transfer_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter invalid payee \"John\" and valid amount \"500\"",
  "keyword": "When "
});
formatter.match({
  "location": "FTransferStepDefinition.i_enter_invalid_payee_and_valid_amount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FTransferStepDefinition.i_click_on_Transfer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get fail message \"Transfer failed!! \u0027John\u0027 is not approved. Please contact your branch\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FTransferStepDefinition.i_should_get_fail_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/OurWeb.feature");
formatter.feature({
  "name": "Registration form fillup",
  "description": "  As a user he will able to Registration by using valid data",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@OurWebSite"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User will able to Registration by using valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DataDriven"
    }
  ]
});
formatter.step({
  "name": "user is on registration form web page",
  "keyword": "Given "
});
formatter.step({
  "name": "user will Enter \"\u003cFirstName\u003e\", \"\u003cLastName\u003e\",\"\u003cEmail\u003e\", \"\u003cAgEmail\u003e\",\"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user will click on \"\u003cSex\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user will select \"\u003cMonth\u003e\",\"\u003cDay\u003e\", \"\u003cYear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user will able to register successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email",
        "AgEmail",
        "Password",
        "Sex",
        "Month",
        "Day",
        "Year"
      ]
    },
    {
      "cells": [
        "Farhana",
        "Zaman",
        "farhana@yahoo.com",
        "farhana@yahoo.com",
        "far7645",
        "Female",
        "Jun",
        "25",
        "1987"
      ]
    },
    {
      "cells": [
        "Mohammed",
        "Islam",
        "islam@gmail.com",
        "islam@gmail.com",
        "islam423",
        "Male",
        "May",
        "26",
        "1975"
      ]
    },
    {
      "cells": [
        "Padma",
        "Khan",
        "padma@yahoo.com",
        "padma@yahoo.com",
        "padm1432",
        "Female",
        "Feb",
        "27",
        "1985"
      ]
    },
    {
      "cells": [
        "Farhana",
        "Zaman",
        "farhana@yahoo.com",
        "farhana@yahoo.com",
        "far7645",
        "Female",
        "Jun",
        "28",
        "1987"
      ]
    },
    {
      "cells": [
        "Mohammed",
        "Zahir",
        "islam@gmail.com",
        "islam@gmail.com",
        "islam423",
        "Male",
        "May",
        "29",
        "1975"
      ]
    },
    {
      "cells": [
        "Oyshi",
        "Khan",
        "padma@yahoo.com",
        "padma@yahoo.com",
        "padm1432",
        "Female",
        "Feb",
        "30",
        "1985"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User will able to Registration by using valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@OurWebSite"
    },
    {
      "name": "@DataDriven"
    }
  ]
});
