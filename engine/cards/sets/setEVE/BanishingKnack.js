"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BanishingKnack extends Card {
  constructor(game) {
    super(game, "Banishing Knack", "Eventide", "EVE");
  }
}

module.exports = BanishingKnack;
