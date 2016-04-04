"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbductionBase = require("../set6ED/Abduction.js");

class Abduction extends AbductionBase {
  constructor(game) {
    super(game, "Abduction", "Weatherlight", "WTH");
  }
}

module.exports = Abduction;
