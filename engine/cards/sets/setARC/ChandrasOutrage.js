"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChandrasOutrage extends Card {
  constructor(game) {
    super(game, "Chandra's Outrage", "Archenemy", "ARC");
  }
}

module.exports = ChandrasOutrage;
