"use strict";
const Constants = require ("../../../Constants");
const StoneSpiritBase = require("../setME2/StoneSpirit");

class StoneSpirit extends StoneSpiritBase {
  constructor (game) {
    super(game, "Stone Spirit", "Fifth Edition", "5ED");
  }
}

module.exports = StoneSpirit;
