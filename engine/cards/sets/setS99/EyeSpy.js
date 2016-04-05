"use strict";
const Constants = require ("../../../Constants");
const EyeSpyBase = require("../setPO2/EyeSpy");

class EyeSpy extends EyeSpyBase {
  constructor(game) {
    super(game, "Eye Spy", "Starter 1999", "S99");
  }
}

module.exports = EyeSpy;
