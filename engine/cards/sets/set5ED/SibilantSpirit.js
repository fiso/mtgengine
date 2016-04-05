"use strict";
const Constants = require ("../../../Constants");
const SibilantSpiritBase = require("../set6ED/SibilantSpirit");

class SibilantSpirit extends SibilantSpiritBase {
  constructor(game) {
    super(game, "Sibilant Spirit", "Fifth Edition", "5ED");
  }
}

module.exports = SibilantSpirit;
