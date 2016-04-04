"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreaterMossdog extends Card {
  constructor(game) {
    super(game, "Greater Mossdog", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = GreaterMossdog;
