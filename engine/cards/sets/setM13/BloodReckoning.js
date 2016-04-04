"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodReckoning extends Card {
  constructor(game) {
    super(game, "Blood Reckoning", "Magic 2013", "M13");
  }
}

module.exports = BloodReckoning;
