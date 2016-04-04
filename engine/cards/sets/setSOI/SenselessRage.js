"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SenselessRage extends Card {
  constructor(game) {
    super(game, "Senseless Rage", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SenselessRage;
