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

🙌 E2E test
- ✅Open pagina
- ✅Kies een patroon
- ✅Klik op start
- ✅Mock de API Call met een glider response
- Voeg assertions toe voor glider

Functionaliteit toevoegen waarmee na het klikken op de start knop het spel echt start en het gevraagde universum zichtbaar wordt
- Vervang de onGameStart functie door de PostNewGame functie
  

# API connection with backend
- Mock call to backend
  ✅- Start a new game with a glider, successful response, glider universe is found
  - Start a new game with a glider, error receveid, no universe returned

# Maybe do these tests in Cypress? Spike?
https://nextjs.org/docs/pages/building-your-application/optimizing/testing
I mean this test: - Test that the DOM contains the correct universe
✅ - Optimize component test for game grid. Currently takes > 1 minute
✅    -- Readability can be improved further. For the test case and the code of the component.

# Investigate SuperTest
https://www.npmjs.com/package/supertest

# SPIKE: BDD + Cypress for e2e testing
https://kailash-pathak.medium.com/cypress-13-integration-with-bdd-cucumber-pom-a367f534b363

# Tech debt
## Styling improvements
- Prevent the universe from overlapping with the gameconfig component
  -- Change the settings styling to use Tailwind instead of CSS