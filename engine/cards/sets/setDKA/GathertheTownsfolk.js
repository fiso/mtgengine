"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GathertheTownsfolk extends Card {
  constructor(game) {
    super(game, "Gather the Townsfolk", "Dark Ascension", "DKA");
  }
}

module.exports = GathertheTownsfolk;
