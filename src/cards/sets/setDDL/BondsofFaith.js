"use strict";
const Constants = require ("../../../Constants");
const BondsofFaithBase = require("../setDDQ/BondsofFaith");

class BondsofFaith extends BondsofFaithBase {
  constructor(game) {
    super(game, "Bonds of Faith", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = BondsofFaith;
