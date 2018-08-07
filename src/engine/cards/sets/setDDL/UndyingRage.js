"use strict";
const Constants = require ("../../../Constants");
const UndyingRageBase = require("../setEMA/UndyingRage");

class UndyingRage extends UndyingRageBase {
  constructor (game) {
    super(game, "Undying Rage", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = UndyingRage;
