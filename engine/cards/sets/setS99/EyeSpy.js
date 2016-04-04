"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EyeSpyBase = require("../setPO2/EyeSpy.js");

class EyeSpy extends EyeSpyBase {
  constructor(game) {
    super(game, "Eye Spy", "Starter 1999", "S99");
  }
}

module.exports = EyeSpy;
