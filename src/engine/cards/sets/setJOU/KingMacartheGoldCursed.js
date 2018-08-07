"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KingMacartheGoldCursed extends UnimplementedCard {
  constructor (game) {
    super(game, "King Macar, the Gold-Cursed", "Journey into Nyx", "JOU");
  }
}

module.exports = KingMacartheGoldCursed;
