"use strict";
const Constants = require ("../../../Constants");
const ValleyRannetBase = require("../setC13/ValleyRannet");

class ValleyRannet extends ValleyRannetBase {
  constructor (game) {
    super(game, "Valley Rannet", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = ValleyRannet;
