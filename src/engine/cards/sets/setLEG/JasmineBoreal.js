"use strict";
const Constants = require ("../../../Constants");
const JasmineBorealBase = require("../setTSB/JasmineBoreal");

class JasmineBoreal extends JasmineBorealBase {
  constructor (game) {
    super(game, "Jasmine Boreal", "Legends", "LEG");
  }
}

module.exports = JasmineBoreal;
