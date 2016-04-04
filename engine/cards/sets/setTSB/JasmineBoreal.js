"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JasmineBorealBase = require("../setLEG/JasmineBoreal.js");

class JasmineBoreal extends JasmineBorealBase {
  constructor(game) {
    super(game, "Jasmine Boreal", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = JasmineBoreal;
