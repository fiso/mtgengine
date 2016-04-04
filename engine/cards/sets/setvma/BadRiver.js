"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BadRiverBase = require("../setMIR/BadRiver.js");

class BadRiver extends BadRiverBase {
  constructor(game) {
    super(game, "Bad River", "Vintage Masters", "VMA");
  }
}

module.exports = BadRiver;
