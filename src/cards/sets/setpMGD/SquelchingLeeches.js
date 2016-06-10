"use strict";
const Constants = require ("../../../Constants");
const SquelchingLeechesBase = require("../setJOU/SquelchingLeeches");

class SquelchingLeeches extends SquelchingLeechesBase {
  constructor (game) {
    super(game, "Squelching Leeches", "Magic Game Day", "pMGD");
  }
}

module.exports = SquelchingLeeches;
