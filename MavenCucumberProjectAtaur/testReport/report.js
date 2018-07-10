$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/FuTransfer.feature");
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on registration form web page",
  "keyword": "Given "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_is_on_registration_form_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will Enter \"Farhana\", \"Zaman\",\"farhana@yahoo.com\", \"farhana@yahoo.com\",\"far7645\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_Enter(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on \"Female\"",
  "keyword": "And "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will select \"Jun\",\"25\", \"1987\"",
  "keyword": "And "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_select(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_able_to_register_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on registration form web page",
  "keyword": "Given "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_is_on_registration_form_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will Enter \"Mohammed\", \"Islam\",\"islam@gmail.com\", \"islam@gmail.com\",\"islam423\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_Enter(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will select \"May\",\"26\", \"1975\"",
  "keyword": "And "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_select(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_able_to_register_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on registration form web page",
  "keyword": "Given "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_is_on_registration_form_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will Enter \"Padma\", \"Khan\",\"padma@yahoo.com\", \"padma@yahoo.com\",\"padm1432\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_Enter(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on \"Female\"",
  "keyword": "And "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will select \"Feb\",\"27\", \"1985\"",
  "keyword": "And "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_select(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_able_to_register_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on registration form web page",
  "keyword": "Given "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_is_on_registration_form_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will Enter \"Farhana\", \"Zaman\",\"farhana@yahoo.com\", \"farhana@yahoo.com\",\"far7645\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_Enter(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on \"Female\"",
  "keyword": "And "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will select \"Jun\",\"28\", \"1987\"",
  "keyword": "And "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_select(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_able_to_register_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on registration form web page",
  "keyword": "Given "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_is_on_registration_form_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will Enter \"Mohammed\", \"Zahir\",\"islam@gmail.com\", \"islam@gmail.com\",\"islam423\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_Enter(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will select \"May\",\"29\", \"1975\"",
  "keyword": "And "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_select(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_able_to_register_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on registration form web page",
  "keyword": "Given "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_is_on_registration_form_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will Enter \"Oyshi\", \"Khan\",\"padma@yahoo.com\", \"padma@yahoo.com\",\"padm1432\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_Enter(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on \"Female\"",
  "keyword": "And "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will select \"Feb\",\"30\", \"1985\"",
  "keyword": "And "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_select(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.user_will_able_to_register_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});