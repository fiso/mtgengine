"use strict";
const Constants = require ("../../../Constants");
const FlameKinZealotBase = require("../setEMA/FlameKinZealot");

class FlameKinZealot extends FlameKinZealotBase {
  constructor (game) {
    super(game, "Flame-Kin Zealot", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = FlameKinZealot;
