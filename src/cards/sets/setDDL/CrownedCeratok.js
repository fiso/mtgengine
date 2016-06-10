"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrownedCeratok extends UnimplementedCard {
  constructor (game) {
    super(game, "Crowned Ceratok", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = CrownedCeratok;
