"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagneticTheft extends Card {
  constructor(game) {
    super(game, "Magnetic Theft", "Fifth Dawn", "5DN");
  }
}

module.exports = MagneticTheft;
