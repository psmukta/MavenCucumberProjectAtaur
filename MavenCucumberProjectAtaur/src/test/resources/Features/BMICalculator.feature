Feature: BMI Calculater functionality
  Users can calculate their BMI.As a user I can calculate my BMI by using BMI Calculater
  
  Secnario: Optimum Height and Weight
  Given 	I am on BMI Calculater Webpage 
  When    I enter Height in Centimiters "160" and Weight in Kilograms "65"
  And     I click on calculate
  Then    I should get message BMI is "23.4, Normal" 
  Secnario: Optimum Height and high in Weight
  Given 	I am on BMI Calculater Webpage 
  When    I enter Height in Centimiters "160" and Weight in Kilograms "95"
  And     I click on calculate
  Then    I should get message BMI is "37.1, Obesity" 
  Secnario:  Optimum Height and high in weight
  Given 	I am on BMI Calculater Webpage 
  When    I enter Height in Centimiters "180" and Weight in Kilograms "95"
  And     I click on calculate
  Then    I should get message BMI is "29.3,Overweight" 
  Secnario: optimum Height and low in Weight
  Given 	I am on BMI Calculater Webpage 
  When    I enter Height in Centimiters "150" and Weight in Kilograms "35"
  And     I click on calculate
  Then    I should get message BMI is "15.6,Underweight"
