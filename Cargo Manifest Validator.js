const manifestExample = {
  containerId: -88, 
  destination: "Soledad", 
  weight: NaN
};

let normalizeUnits = manifest => {

  const newManifest = { ...manifest };

  if(newManifest.unit === "lb") {
    newManifest.unit = "kg";
    newManifest.weight = newManifest.weight * 0.45;
  }
  else {
    newManifest.weight = newManifest.weight
  }
  return newManifest;

}

let validateManifest = manifest => {

  const newManifest = { ...manifest };

  if(!newManifest.hasOwnProperty("containerId")) {
    newManifest.containerId = "Missing";
  }

  else if(typeof newManifest.containerId !== "number" || newManifest.containerId <= 0 || Number.isInteger(newManifest.containerId) == false ) {
    newManifest.containerId = "Invalid";
  }

  else {
    delete newManifest.containerId;
  }

  if(!newManifest.hasOwnProperty("destination")) {
    newManifest.destination = "Missing";
  }

  else if(typeof newManifest.destination !== "string" || newManifest.destination.trim() === "" ) {
   newManifest.destination = "Invalid";
  }

  else {
    delete newManifest.destination;
  }

  if(!newManifest.hasOwnProperty("weight")) {
    newManifest.weight = "Missing";
  }

  else if(typeof newManifest.weight !== "number" || newManifest.weight <= 0 || isNaN(newManifest.weight) == true) {
    newManifest.weight = "Invalid";
  }

  else {
    delete newManifest.weight;
  }

  if(!newManifest.hasOwnProperty("unit")) {
    newManifest.unit = "Missing";
  }

  else if(typeof newManifest.unit !== "string" || (newManifest.unit !== "kg" && newManifest.unit !== "lb")) {
    newManifest.unit = "Invalid";
  }

  else {
    delete newManifest.unit;
  }

  if(!newManifest.hasOwnProperty("hazmat")) {
    newManifest.hazmat = "Missing";
  }

  else if (typeof newManifest.hazmat !== "boolean") {
    newManifest.hazmat = "Invalid";
  }

  else {
    delete newManifest.hazmat;
  }

  return newManifest;

}

let processManifest = manifest => {
  const errors = validateManifest(manifest);
  
  if (Object.keys(errors).length === 0) {
    let normalizeManifest = normalizeUnits(manifest);
    console.log(`Validation success: ${normalizeManifest.containerId}`);
    console.log(`Total weight: ${normalizeManifest.weight} kg`);
  }

  else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(normalizeUnits(errors));
  }

}

console.log(processManifest(manifestExample));  