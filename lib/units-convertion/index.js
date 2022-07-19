// CONVERTION FACTORS
const inchesMetersConvertionFactor = 0.0254;
const milesMetersConvertionFactor = 1609.34;
const yardsMetersConversionFactor = 0.9144;
const feetMetersConvertionFactor = 0.3048;

exports.inchesToMeters = function(inches){
  return inches * inchesMetersConvertionFactor;
}

exports.milesToMeters = function(miles){
  return miles * milesMetersConvertionFactor;
}

exports.yardsToMeters = function(yards){
  return yards * yardsMetersConversionFactor;
}

exports.feetToMeters = function(feet){
  return feet * feetMetersConvertionFactor;
}

exports.reverseInchesToMeters = function(inches){
  return inches * inchesMetersConvertionFactor;
}

exports.reverseMilesToMeters = function(miles){
  return miles * milesMetersConvertionFactor;
}

exports.reverseYardsToMeters = function(yards){
  return yards * yardsMetersConversionFactor;
}

exports.reverseFeetToMeters = function(feet){
  return feet * feetMetersConvertionFactor;
}
