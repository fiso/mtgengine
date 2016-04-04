"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AimHigh extends Card {
  constructor(game) {
    super(game, "Aim High", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AimHigh;
