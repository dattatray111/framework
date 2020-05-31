$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/FlipkartSmoke.feature");
formatter.feature({
  "line": 1,
  "name": "Flipkart Smoke Suite",
  "description": "Verify Important finctionality for flipkart",
  "id": "flipkart-smoke-suite",
  "keyword": "Feature"
});
formatter.before({
  "duration": 22792091000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login-Logout for Flipkart",
  "description": "",
  "id": "flipkart-smoke-suite;login-logout-for-flipkart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User navigate to Flipkart",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enter username",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeSuite.user_navigate_to_Flipkart()"
});
formatter.result({
  "duration": 9489495000,
  "status": "passed"
});
formatter.match({
  "location": "SmokeSuite.user_enter_username()"
});
formatter.result({
  "duration": 363245500,
  "status": "passed"
});
formatter.match({
  "location": "SmokeSuite.user_enter_password()"
});
formatter.result({
  "duration": 146868600,
  "status": "passed"
});
formatter.match({
  "location": "SmokeSuite.click_on_sign_in_button()"
});
formatter.result({
  "duration": 91520200,
  "status": "passed"
});
formatter.match({
  "location": "SmokeSuite.user_should_be_logged_in()"
});
formatter.result({
  "duration": 15299500,
  "status": "passed"
});
formatter.after({
  "duration": 226597300,
  "status": "passed"
});
formatter.after({
  "duration": 2899595200,
  "status": "passed"
});
});