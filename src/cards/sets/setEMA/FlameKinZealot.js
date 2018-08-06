"use strict";
const Constants = require ("../../../Constants");
const FlameKinZealotBase = require("../setDDN/FlameKinZealot");

class FlameKinZealot extends FlameKinZealotBase {
  constructor (game) {
    super(game, "Flame-Kin Zealot", "Eternal Masters", "EMA");
  }
}

module.exports = FlameKinZealot;
