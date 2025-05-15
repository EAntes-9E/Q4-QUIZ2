function checkGrade(grade) {
  if (grade >= 94 && grade <= 100) {
    return "Excellent";
  } else if (grade >= 87 && grade <= 93) {
    return "Above Standard";
  } else if (grade >= 80 && grade <= 86) {
    return "Satisfactory";
  } else if (grade >= 75 && grade <= 79) {
    return "Needs Improvement";
  } else if (grade >= 70 && grade <= 74) {
    return "Poor";
  } else {
    return "Failing";
  }
}

function analyzeScores() {
  const scienceGrade = parseFloat(document.getElementById("science").value);
  const mathGrade = parseFloat(document.getElementById("math").value);
  const englishGrade = parseFloat(document.getElementById("english").value);

  document.getElementById("scienceResult").textContent = checkGrade(scienceGrade);
  document.getElementById("mathResult").textContent = checkGrade(mathGrade);
  document.getElementById("englishResult").textContent = checkGrade(englishGrade);
}