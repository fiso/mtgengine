"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlabasterMage extends Card {
  constructor(game) {
    super(game, "Alabaster Mage", "Magic 2012", "M12");
  }
}

module.exports = AlabasterMage;
