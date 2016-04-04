"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WanderingMage extends Card {
  constructor(game) {
    super(game, "Wandering Mage", "Alliances", "ALL");
  }
}

module.exports = WanderingMage;
