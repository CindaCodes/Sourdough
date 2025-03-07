// Sourdough recipe timer
let steps = [
  {
    text: "Mix together levain, Water and Flour  - Cover and Autolyse for 2 hours",
    note: "Here’s what I use: 100g of 100% hydration sourdough starter fed the night before, 350g of filtered water, and 500g of unbleached organic all-purpose flour. But hey, feel free to go rogue and use your own recipe! Be sure to check out my sourdough starter calculator to help you figure out the right ratios and timing for your starter.",
    time: 2 * 60 * 60,
  },
  {
    text: "Add Salt and Water then fold into dough - Let rest for 45 minutes",
    note: "Add 15g water and 10g salt to dough. For a softer, tighter crumb you can add olive oil instead of water at this time. Stretch and fold until well incorporated.",
    time: 45 * 60,
  },
  {
    text: "First set of stretch & folds - Let rest for 45 minutes",
    note: "Remember to wet your hands before handling the dough! If you're adding dry inclusions, now's the time. Just make sure the dough has enough strength first—otherwise, it might tear like your favorite sweater.",
    time: 45 * 60,
  },
  {
    text: "Second set of stretch & folds - Let rest for 45 minutes",
    note: "Make sure to wet your hands before diving into that dough! I like to keep a nice clean bowl of water nearby for quick dips when needed—because dough and sticky hands are not the vibe.",
    time: 45 * 60,
  },
  {
    text: "Last set of stretch & folds - Bulk fermentation for 5 hours",
    note: "I know I sound like a broken record, but seriously, wet your hands before you touch that dough—unless you want it to stick to you like a toddler with a sugar high!",
    time: 5 * 60 * 60,
  },
  {
    text: "Shape dough to desired loaf shape - bench rest for 20 minutes",
    note: "Create tension on the surface as you shape the dough to help it keep its form. A bench scraper can be your best friend for this step! Let your dough rest seam side up in a rice floured banneton.",
    time: 20 * 60,
  },
  {
    text: "Final proof in fridge - Overnight for 8 hours",
    note: "Feel free to skip this step if you're proofing at room temperature.",
    time: 8 * 60 * 60,
  },
  {
    text: "Final proof at room temperature - in 1 hour we will preheat the oven",
    note: "Total proofing time is around 2 hours at a room temperature of 70°F/21°C. This may vary depending on your room temperature—colder rooms will need a longer proof, while warmer rooms will need less time.",
    time: 1 * 60 * 60,
  },
  {
    text: "Preheat oven to 500°F/260°C - with dutch oven inside",
    note: "Be sure to preheat the Dutch oven so it's nice and hot. Let the dough continue resting until it's time to bake. Of course, you can use any other baking methods you prefer!",
    time: 1 * 60 * 60,
  },
  {
    text: "Score the dough and turn down the oven to 450°F/232°C - Bake covered for 15 minutes",
    note: "Score the dough with a lame or sharp knife to allow it to expand while baking. ⚠️Be careful! The Dutch oven is hot!⚠️ Use thick oven mitts when handling it. I like to toss a few ice cubes into the Dutch oven to create steam, but you can also use a spray bottle to mist the dough.",
    time: 15 * 60,
  },
  {
    text: "Remove the lid and turn around the dutch oven or loaf - bake for another 15 minutes",
    note: "The bread should be a beautiful golden brown and sound hollow when you tap the bottom with your knuckles. If it’s not quite done, bake it for another 5–10 minutes. The internal temperature should reach 200°F/93°C. Some bakers might aim for slightly higher temperatures, up to 210°F/99°C, for an even firmer and drier crumb.",
    time: 15 * 60,
  },
  {
    text: "Remove the bread from the oven and let it cool on a wire rack",
    note: "Let the bread cool for at least 1 hour before slicing. This gives the bread time to finish cooking and allows the crumb to set.",
    time: 1 * 60 * 60,
  },
];

let currentStep = 0;
let timeRemaining = steps[currentStep].time;
let timerInterval;

function updateDisplay() {
  let minutes = Math.floor(timeRemaining / 60);
  let seconds = timeRemaining % 60;
  document.getElementById("timer").innerText = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
  document.getElementById(
    "stepText"
  ).innerText = `Step: ${steps[currentStep].text}`;
  document.getElementById(
    "stepNote"
  ).innerText = `Note: ${steps[currentStep].note}`;
  document.getElementById("stepCounter").innerText = `Step ${
    currentStep + 1
  } of ${steps.length}`;
}

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      if (timeRemaining > 0) {
        timeRemaining--;
        updateDisplay();
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
        nextStep();
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  timeRemaining = steps[currentStep].time;
  updateDisplay();
}

function previousStep() {
  if (currentStep > 0) {
    currentStep--;
    pauseTimer(); // Ensure the timer stops when going to the previous step
    timeRemaining = steps[currentStep].time; // Reset time for the selected step
    updateDisplay();
  } else {
    alert("You're already at the first step!");
  }
}


function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    pauseTimer(); // Ensure the timer is stopped
    timeRemaining = steps[currentStep].time; // Reset time for the new step
    updateDisplay();
  } else {
    alert("Congratulations! 🎉 You made sourdough! 🍞👏");
  }
}

function startOver() {
  pauseTimer(); // Stop any running timer
  currentStep = 0; // Reset to the first step
  timeRemaining = steps[currentStep].time; // Reset the timer for the first step
  updateDisplay(); // Update the UI
}

updateDisplay();
