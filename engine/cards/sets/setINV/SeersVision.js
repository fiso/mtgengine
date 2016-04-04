"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeersVision extends Card {
  constructor(game) {
    super(game, "Seer's Vision", "Invasion", "INV");
  }
}

module.exports = SeersVision;
