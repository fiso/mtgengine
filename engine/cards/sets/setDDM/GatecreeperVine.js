"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GatecreeperVine extends Card {
  constructor(game) {
    super(game, "Gatecreeper Vine", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = GatecreeperVine;
