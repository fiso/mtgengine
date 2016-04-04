"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ViciousBetrayal extends Card {
  constructor(game) {
    super(game, "Vicious Betrayal", "Fifth Dawn", "5DN");
  }
}

module.exports = ViciousBetrayal;
