"use strict";
const Constants = require ("../../../Constants");
const SibilantSpiritBase = require("../setME2/SibilantSpirit");

class SibilantSpirit extends SibilantSpiritBase {
  constructor (game) {
    super(game, "Sibilant Spirit", "Ice Age", "ICE");
  }
}

module.exports = SibilantSpirit;
