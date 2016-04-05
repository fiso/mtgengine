"use strict";
const Constants = require ("../../../Constants");
const TowerGeistBase = require("../setDKA/TowerGeist");

class TowerGeist extends TowerGeistBase {
  constructor(game) {
    super(game, "Tower Geist", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = TowerGeist;
