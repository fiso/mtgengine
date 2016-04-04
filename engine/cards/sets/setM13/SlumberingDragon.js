"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlumberingDragon extends Card {
  constructor(game) {
    super(game, "Slumbering Dragon", "Magic 2013", "M13");
  }
}

module.exports = SlumberingDragon;
