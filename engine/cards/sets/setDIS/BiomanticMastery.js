"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BiomanticMasteryBase = require("../setC15/BiomanticMastery.js");

class BiomanticMastery extends BiomanticMasteryBase {
  constructor(game) {
    super(game, "Biomantic Mastery", "Dissension", "DIS");
  }
}

module.exports = BiomanticMastery;
