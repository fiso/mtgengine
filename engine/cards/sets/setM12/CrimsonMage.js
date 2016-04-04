"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrimsonMage extends Card {
  constructor(game) {
    super(game, "Crimson Mage", "Magic 2012", "M12");
  }
}

module.exports = CrimsonMage;
