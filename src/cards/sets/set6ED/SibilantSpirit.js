"use strict";
const Constants = require ("../../../Constants");
const SibilantSpiritBase = require("../setME2/SibilantSpirit");

class SibilantSpirit extends SibilantSpiritBase {
  constructor (game) {
    super(game, "Sibilant Spirit", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SibilantSpirit;
