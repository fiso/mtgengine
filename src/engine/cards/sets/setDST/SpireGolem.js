"use strict";
const Constants = require ("../../../Constants");
const SpireGolemBase = require("../setJVC/SpireGolem");

class SpireGolem extends SpireGolemBase {
  constructor (game) {
    super(game, "Spire Golem", "Darksteel", "DST");
  }
}

module.exports = SpireGolem;
