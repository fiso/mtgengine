"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KingMacartheGoldCursed extends Card {
  constructor(game) {
    super(game, "King Macar, the Gold-Cursed", "Journey into Nyx", "JOU");
  }
}

module.exports = KingMacartheGoldCursed;
