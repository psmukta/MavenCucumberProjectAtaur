Feature: Registration form fillup by data table
  As a user he will able to Registration by using valid data

  Scenario: Facebook will open on same window
    Given user is on home page
    When user will click on facebook link
    Then user will able to see facebook page on same window
    And User will go again home page

  Scenario: User will able to Registration by using valid data
    Given user is on home page
    When user enter
      | FirstName | Parveen           |
      | LastName  | Sultana           |
      | Email     | parveen@yahoo.com |
      | AEmail    | parveen@yahoo.com |
      | Password  | adas321           |
    And user click on
      | Sex    |
      | Male   |
      | Female |
    And user select
      | Month | May  |
      | Day   |   10 |
      | Year  | 1987 |
    Then user will able to SignUp successfully
