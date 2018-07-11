Feature: BMI Calculater functionality
  Users can calculate their BMI.As a user I can calculate my BMI by using BMI Calculater
  
  Secnario: Optimum Height and Weight
    Given 	I am on BMI Calculater Webpage 
    When    I enter Height in Centimiters "160" and Weight in Kilograms "65"
    And     I click on calculate
    Then    I should get message BMI is "23.4,normal" 
  Secnario: Optimum Height and too over Weight
    Given 	I am on BMI Calculater Webpage 
     When    I enter Height in Centimiters "160" and Weight in Kilograms "95"
    And     I click on calculate
     Then    I should get message BMI is "37.1, obesity" 
  Secnario:  Optimum Height and over weight
     Given 	I am on BMI Calculater Webpage 
     When    I enter Height in Centimiters "180" and Weight in Kilograms "95"
    And     I click on calculate
    Then    I should get message BMI is "29.3, overweight" 
  Secnario: optimum Height and under Weight
    Given 	I am on BMI Calculater Webpage 
    When    I enter Height in Centimiters "150" and Weight in Kilograms "35"
    And     I click on calculate
    Then    I should get message BMI is "15.6 ,underweight"
