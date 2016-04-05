"use strict";
const Constants = require ("../../../Constants");
const PiracyBase = require("../setPO2/Piracy");

class Piracy extends PiracyBase {
  constructor(game) {
    super(game, "Piracy", "Starter 1999", "S99");
  }
}

module.exports = Piracy;
