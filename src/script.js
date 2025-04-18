//Sourdough bakers math calculator
function calculate() {
  const loafs = document.getElementById("loafs").value;
  const hydration = document.getElementById("hydration").value;
  const oilPercentage = document.getElementById("oil").value;

  if (
    loafs < 1 ||
    hydration < 1 ||
    hydration > 100 ||
    oilPercentage < 0 ||
    oilPercentage > 20
  ) {
    alert("Please enter valid values.");
    return;
  }

  // Constants
  const flourPerLoaf = 500; // 500g of flour per loaf
  const starterRatio = 0.2; // 20% starter
  const saltRatio = 0.02; // 2% salt
  const oilRatio = oilPercentage / 100; // Olive oil percentage

  // Calculations
  const totalFlour = loafs * flourPerLoaf;
  const totalWater = totalFlour * (hydration / 100);
  const totalStarter = totalFlour * starterRatio;
  const totalSalt = totalFlour * saltRatio;
  const totalOil = totalFlour * oilRatio;

  // Display Results
  let resultsHTML = `
    <p><strong>For ${loafs} loaf(s):</strong></p>
    <p><strong>Flour:</strong> ${totalFlour}g</p>
    <p><strong>Water:</strong> ${totalWater.toFixed(
      2
    )}g (Hydration: ${hydration}%)</p>
    <p><strong>Starter:</strong> ${totalStarter.toFixed(2)}g</p>
    <p><strong>Salt:</strong> ${totalSalt.toFixed(2)}g</p>`;

  // Only include olive oil if percentage is greater than 0
  if (oilPercentage > 0) {
    resultsHTML += `<p><strong>Olive Oil:</strong> ${totalOil.toFixed(
      2
    )}g (Olive Oil: ${oilPercentage}%)</p>`;
  }

  document.getElementById("results").innerHTML = resultsHTML;
}



//Sourdough starter ratio calculator
function calculateTimeframe() {
  let totalStarter = parseFloat(
    document.getElementById("totalStarterTime").value
  );
  let timeFrame = document.getElementById("timeFrame").value;

  let starterRatio = 1;
  let waterRatio = 1;
  let flourRatio = 1;

  if (timeFrame === "6-8") {
    waterRatio = 2;
    flourRatio = 2;
  } else if (timeFrame === "8-10") {
    waterRatio = 3;
    flourRatio = 3;
  } else if (timeFrame === "10-12") {
    waterRatio = 4;
    flourRatio = 4;
  } else if (timeFrame === "12-14") {
    waterRatio = 5;
    flourRatio = 5;
  } else if (timeFrame === "16-24") {
    waterRatio = 10;
    flourRatio = 10;
  }


  let totalRatio = starterRatio + waterRatio + flourRatio;

  let starter = Math.round((totalStarter * starterRatio) / totalRatio);
  let water = Math.round((totalStarter * waterRatio) / totalRatio);
  let flour = Math.round((totalStarter * flourRatio) / totalRatio);

  document.getElementById(
    "starterAmountTime"
  ).innerHTML = `<strong>Starter:</strong> ${starter}g`;
  document.getElementById(
    "waterAmountTime"
  ).innerHTML = `<strong>Water:</strong> ${water}g`;
  document.getElementById(
    "flourAmountTime"
  ).innerHTML = `<strong>Flour:</strong> ${flour}g`;


  // Show the result box
  document.getElementById("resultBox").style.display = "block";
}


//Slideshow
 let currentSlide = 0;
 const slides = document.querySelectorAll(".slide");

 function changeSlide(direction) {
   slides[currentSlide].classList.remove("active");
   currentSlide = (currentSlide + direction + slides.length) % slides.length;
   slides[currentSlide].classList.add("active");
 }

 // Auto-advance slides every 5 seconds
 setInterval(() => changeSlide(1), 5000);

 