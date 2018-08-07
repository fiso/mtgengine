"use strict";
const Constants = require ("../../../Constants");
const DestructiveRevelryBase = require("../setTHS/DestructiveRevelry");

class DestructiveRevelry extends DestructiveRevelryBase {
  constructor (game) {
    super(game, "Destructive Revelry", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = DestructiveRevelry;
