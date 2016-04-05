"use strict";
const Constants = require ("../../../Constants");
const JasmineBorealBase = require("../setLEG/JasmineBoreal");

class JasmineBoreal extends JasmineBorealBase {
  constructor(game) {
    super(game, "Jasmine Boreal", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = JasmineBoreal;
