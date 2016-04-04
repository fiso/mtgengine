"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MurderousSpoils extends Card {
  constructor(game) {
    super(game, "Murderous Spoils", "Darksteel", "DST");
  }
}

module.exports = MurderousSpoils;
