"use strict";
const Constants = require ("../../../Constants");
const IslandBase = require("../setC18/Island");

class Island extends IslandBase {
  constructor (game) {
    super(game, "Island", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = Island;
