@BMICalculator
Feature: BMI Calculater functionality
  As a user I want to calculate my BMI by using BMI Calculater

  Scenario: Categoty Under Weight
    Given I am on BMI Calculater Webpage
    When I enter Height in Centimiters "170" and Weight in Kilograms "50"
    And I click on calculate button
    Then I should get BMI value "17.3"
    And I should get BMI Category "Underweight"

  Scenario: Categoty Over Weight
    Given I am on BMI Calculater Webpage
    When I enter Height in Centimiters "170" and Weight in Kilograms "80"
    And I click on calculate button
    Then I should get BMI value "27.7"
    And I should get BMI Category "Overweight"

  Scenario: Categoty Normal
    Given I am on BMI Calculater Webpage
    When I enter Height in Centimiters "170" and Weight in Kilograms "60"
    And I click on calculate button
    Then I should get BMI value "20.8"
    And I should get BMI Category "Normal"

  Scenario: Categoty Obesity
    Given I am on BMI Calculater Webpage
    When I enter Height in Centimiters "170" and Weight in Kilograms "90"
    And I click on calculate button
    Then I should get BMI value "31.1"
    And I should get BMI Category "Obesity"
