function getAverage (gradesArray) {
  let averageGrade = 0;
  let count = 0;
  for (let i = 0; i < gradesArray.length; i++) {
    averageGrade += gradesArray[i];
    count++;
  }
  averageGrade /= count;
  return averageGrade;
}

function getGrade (grade) {
  let letterGrade;
    if (grade >= 0 && grade <= 59) {
      letterGrade = "F";
    }
    else if (grade >= 60 && grade <= 69) {
      letterGrade = "D";
    }
    else if (grade >= 70 && grade <= 79) {
      letterGrade = "C";
    }
    else if (grade >= 80 && grade <= 89) {
      letterGrade = "B";
    }
    else if (grade >= 90 && grade <= 99) {
      letterGrade = "A";
    }
    else {
      letterGrade = "A+";
    }
  return letterGrade;
}

function hasPassingGrade (grade) {
  let isValid;
  let letterGrade = getGrade(grade);
  if (letterGrade === "A+" || letterGrade === "A" || letterGrade === "B" || letterGrade === "C" || letterGrade === "D")   {
    isValid = true;
    }
  else {
    isValid = false;
  }
  return isValid;
}

function studentMsg (gradesArray, grade) {
  let averageGrade = getAverage(gradesArray);
  let letterGrade = getGrade(grade);
  let result;

    if (letterGrade === "A+" || letterGrade === "A" || letterGrade === "B" || letterGrade === "C" || letterGrade === "D") {
      result = `Class average: ${averageGrade}. Your grade: ${letterGrade}. You passed the course.`
    }

    else {
      result = `Class average: ${averageGrade}. Your grade: ${letterGrade}. You failed the course.`
    }

  return result;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))