"use strict";
const Constants = require ("../../../Constants");
const MortarpodBase = require("../setMM2/Mortarpod");

class Mortarpod extends MortarpodBase {
  constructor (game) {
    super(game, "Mortarpod", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = Mortarpod;
