"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildHunger extends Card {
  constructor(game) {
    super(game, "Wild Hunger", "Dark Ascension", "DKA");
  }
}

module.exports = WildHunger;
