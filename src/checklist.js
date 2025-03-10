let steps = [
  {
    text: "Mix levain, water, and flour - Autolyse for 2 hours",
    note: "Use 100g starter, 350g water, 500g flour. Check my starter calculator!",
  },
  {
    text: "Add salt & water - Fold into dough, rest for 45 min",
    note: "Add 15g water & 10g salt. Stretch & fold until incorporated.",
  },
  {
    text: "First stretch & fold - Rest for 45 min",
    note: "Keep a clean bowl of water nearby to dipping your hands in before handling dough.",
  },
  {
    text: "Second stretch & fold - Rest for 45 min",
    note: "Wet your hands before handling the dough.",
  },
  {
    text: "Last stretch & fold - Bulk ferment 5 hrs",
    note: "Don't forget to wet your hands. Dough should feel smooth by now.",
  },
  {
    text: "Shape dough - Bench rest 20 min",
    note: "Create tension for better rise. Use a banneton if you have one.",
  },
  {
    text: "Final proof in fridge - Overnight 8 hrs",
    note: "Optional: Skip for room temp proofing for same day bakes. Cold fermentation results in a more tangy, rich, and deep sourdough taste.",
  },
  {
    text: "Final proof at room temp - Preheat oven in 1 hr",
    note: "Adjust proof time based on room temperature. Optional: You can skip this if did a cold fermentation. You can keep your dough in the fridge until ready to bake. Cold dough bakes with a better rise (oven spring) because the contrast between the cold dough and the hot oven helps trap steam inside. This creates a crispier, shinier crust.",
  },
  {
    text: "Preheat oven to 500°F with Dutch oven inside",
    note: "Ensure Dutch oven is hot before baking.",
  },
  {
    text: "Score dough, lower oven to 450°F - Bake 20 min",
    note: "Use a lame for scoring. Be careful of hot surfaces! Did you know chilled dough is firmer and less sticky, making scoring (slashing the top) cleaner and more precise.",
  },
  {
    text: "Remove lid, rotate loaf - Bake another 20 min",
    note: "Check for golden color internal temp should be around 200°F and 210°F (93°C - 99°C) when done.",
  },
  {
    text: "Remove bread, cool on wire rack for 1 hour",
    note: "Carefully remove the bread from the oven. Flip it over and tap the bottom with your knuckles. If it sounds hollow, it's done. If it sounds dense or dull, it may need a few more minutes.",
  },
];

const checklistContainer = document.getElementById("checklist");

steps.forEach((step, index) => {
  const stepDiv = document.createElement("div");
  stepDiv.classList.add("step");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      textLabel.classList.add("completed");
    } else {
      textLabel.classList.remove("completed");
    }
  });

  const textLabel = document.createElement("label");
  textLabel.textContent = step.text;

  const noteButton = document.createElement("button");
  noteButton.classList.add("toggle-note");
  noteButton.textContent = "More\nInfo";
  noteButton.onclick = function () {
    noteParagraph.style.display =
      noteParagraph.style.display === "block" ? "none" : "block";
  };

  const noteParagraph = document.createElement("p");
  noteParagraph.classList.add("note");
  noteParagraph.textContent = step.note;

  stepDiv.appendChild(checkbox);
  stepDiv.appendChild(textLabel);
  stepDiv.appendChild(noteButton);
  stepDiv.appendChild(noteParagraph);

  checklistContainer.appendChild(stepDiv);
});
