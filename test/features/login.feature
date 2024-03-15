Feature: Kasirqa Login Test

    @all @negative
    Scenario: Verify failed login with invalid email
        Given I open Kasirqa website
        When I login with invalid email
        Then I should be got an error email message

    @all @negative
    Scenario: Verify failed login with invalid password
        Given I open Kasirqa website
        When I login with invalid password
        Then I should be got an error password message

    @all @positive
    Scenario: Verify success login with valid credentials
        Given I open Kasirqa website
        When I login with valid credentials
        Then I should be on inventory page