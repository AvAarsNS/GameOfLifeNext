# miro link
https://miro.com/app/board/uXjVNZMphpc=/
ww GameofLife

# Tailwind cheat sheet
https://nerdcave.com/tailwind-cheat-sheet

# UX ontwerp Reny namaken
✅- Patroonlijstje namaken 
✅- Start button component maken 
✅ Start button in html joekelen -> ✅ mag lelijk
✅ - patroon configuratie in GameConfig

# Start button werkend maken
✅ Component test
  -- Klik op start
  -- Het gekozen pattern moet meegegeven worden aan de onClick-functie
  -- Valideren dat er maar 1 pattern mee wordt gegeven

✅ E2E test
- ✅Open pagina
- ✅Kies een patroon
- ✅Klik op start
- ✅Mock de API Call met een glider response
- ✅Voeg assertions toe voor glider

Functionaliteit toevoegen waarmee na het klikken op de start knop het spel echt start en het gevraagde universum zichtbaar wordt
✅ - onGameStart function:
  -- Ensure that the response will be passed to the GameGrid component, so the user can see it
    --- Component test to ensure onGameStart function returns a proper universe ([][])
    --- Only a small step left to get the game working. The game grid receives something, but it cannot render it. Debug this issue to find out what this component receives and why it cannot render it.

✅ SPIKE: how can we get the response universe in our grid?
  
# Front end koppelen aan backend (start new game)

✅ - Echte backend koppelen aan de start new game functionaliteit en testen

# Front end maken voor opvragen volgende tick

✅ - test maken in cypress
- Knopje erin joekelen
- Verbinden met de backend


# API connection with backend
- Mock call to backend
  ✅- Start a new game with a glider, successful response, glider universe is found
  - Start a new game with a glider, error receveid, no universe returned

# Maybe do these tests in Cypress? Spike?
https://nextjs.org/docs/pages/building-your-application/optimizing/testing
I mean this test: - Test that the DOM contains the correct universe
✅ - Optimize component test for game grid. Currently takes > 1 minute
✅    -- Readability can be improved further. For the test case and the code of the component.

# Make ReadyAPI test run from command line
🙌 Use command C:\Users\johan.buis_nsp\AppData\Local\Programs\SmartBear\ReadyAPI-3.47.0\bin\testrunner.bat -sGameOfLife -r -a -f"C:\reports" "-RJUnit-Style HTML Report" -FXML "-EDefault environment" "C:\Kata\GameOfLife ReadyAPI"
   Dit commando moet nog de parameters in voor het uitvoeren van de testrunner op ieders laptop. Command is te verkrijgen via ReadyAPI --> Rechtermuisknop op Test Suite --> Launch TestRunner --> Get Command Line

# Investigate SuperTest
https://www.npmjs.com/package/supertest

# SPIKE: BDD + Cypress for e2e testing
https://kailash-pathak.medium.com/cypress-13-integration-with-bdd-cucumber-pom-a367f534b363

# Tech debt
## Styling improvements
- Prevent the universe from overlapping with the gameconfig component
  -- Change the settings styling to use Tailwind instead of CSS