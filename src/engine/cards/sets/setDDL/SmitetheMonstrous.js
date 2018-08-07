"use strict";
const Constants = require ("../../../Constants");
const SmitetheMonstrousBase = require("../setBFZ/SmitetheMonstrous");

class SmitetheMonstrous extends SmitetheMonstrousBase {
  constructor (game) {
    super(game, "Smite the Monstrous", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = SmitetheMonstrous;
