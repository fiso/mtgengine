"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrimstoneMage extends Card {
  constructor(game) {
    super(game, "Brimstone Mage", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BrimstoneMage;
