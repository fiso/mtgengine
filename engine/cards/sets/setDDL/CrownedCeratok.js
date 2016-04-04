"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrownedCeratok extends Card {
  constructor(game) {
    super(game, "Crowned Ceratok", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = CrownedCeratok;
