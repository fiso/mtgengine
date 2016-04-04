"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PiracyBase = require("../setPO2/Piracy.js");

class Piracy extends PiracyBase {
  constructor(game) {
    super(game, "Piracy", "Starter 1999", "S99");
  }
}

module.exports = Piracy;
