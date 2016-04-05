"use strict";
const Constants = require ("../../../Constants");
const DictateofHeliodBase = require("../setC15/DictateofHeliod");

class DictateofHeliod extends DictateofHeliodBase {
  constructor(game) {
    super(game, "Dictate of Heliod", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = DictateofHeliod;
