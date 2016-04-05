"use strict";
const Constants = require ("../../../Constants");
const IceBase = require("../setAPC/Ice");

class Ice extends IceBase {
  constructor(game) {
    super(game, "Ice", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Ice;
