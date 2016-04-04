"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StifleBase = require("../setpJGP/Stifle.js");

class Stifle extends StifleBase {
  constructor(game) {
    super(game, "Stifle", "Scourge", "SCG");
  }
}

module.exports = Stifle;
