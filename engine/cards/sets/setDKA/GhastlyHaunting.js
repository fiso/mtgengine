"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhastlyHaunting extends Card {
  constructor(game) {
    super(game, "Ghastly Haunting", "Dark Ascension", "DKA");
  }
}

module.exports = GhastlyHaunting;
