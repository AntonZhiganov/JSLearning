const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence (config, cycles) {
  let counter = 0;
  let isFaulted;
  if (config.phases[0] === undefined) {
    console.log("No phases found");
    return;
  }
  while (counter < cycles) {
    for (let i = 0; i < config.phases.length; i++) {
    if (config.fault === true) {
      console.log("Faulted phase!");
      isFaulted = true;
      break;
    }
    else if (config.phases[i].duration <= 0) {
      console.log("Invalid phase detected");
    }
    else {
        console.log(`Switching to ${config.phases[i].color} for ${config.phases[i].duration} s`);
      }
    }
    if (isFaulted) {
      break;
    }
    counter++;
  }
}

function generateTimeline(config, cycles) {
  let durationTime = [];
  let counter = 0;
  let totalTime = 0;

  while (counter < cycles) {
    for( let i = 0; i < config.phases.length; i++) {
    totalTime += config.phases[i].duration;
    durationTime.push(totalTime)

    }
    counter++;
  }
  return durationTime;
}

generateTimeline(config4, 1)