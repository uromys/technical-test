# Technical test

## Introduction

Fabien just came back from a meeting with an incubator and told them we have a platform “up and running” to monitor people's activities and control the budget for their startups !

All others developers are busy and we need you to deliver the app for tomorrow.
Some bugs are left and we need you to fix those. Don't spend to much time on it.

We need you to follow these steps to understand the app and to fix the bug : 
 - Sign up to the app
 - Create at least 2 others users on people page ( not with signup ) 
 - Edit these profiles and add aditional information 
 - Create a project
 - Input some information about the project
 - Input some activities to track your work in the good project
  
Then, see what happens in the app and fix the bug you found doing that.

## Then
Time to be creative, and efficient. Do what you think would be the best for your product under a short period.

### The goal is to fix at least 3 bugs and implement 1 quick win feature than could help us sell the platform

## Setup api

- cd api
- Run `npm i`
- Run `npm run dev`

## Setup app

- cd app
- Run `npm i`
- Run `npm run dev`

## Finally

Send us the project and answer to those simple questions : 
- What bugs did you find ? 
- fix : the API password  now have the same validation as the front
- fix : remove the password from API response
- fix : remove the header myaccount still open after clicking 
- fix : added more verbose on error 
- fix : the project page is now availaible and do not return a 500 
- feat : add a formate validator to email
- feat : deletion of project
- feat : update/deletion do not requires update of the page 

- Do you have any feedback about the code / architecture of the project and what was the difficulty you encountered while doing it ? 
- Docker :p 
- Test , I wanted to add jest but I had issue with upgrade
