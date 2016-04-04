"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrengthofArms extends Card {
  constructor(game) {
    super(game, "Strength of Arms", "Shadows over Innistrad", "SOI");
  }
}

module.exports = StrengthofArms;
