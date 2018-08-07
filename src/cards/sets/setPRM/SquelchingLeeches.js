"use strict";
const Constants = require ("../../../Constants");
const SquelchingLeechesBase = require("../setDDR/SquelchingLeeches");

class SquelchingLeeches extends SquelchingLeechesBase {
  constructor (game) {
    super(game, "Squelching Leeches", "Magic Online Promos", "PRM");
  }
}

module.exports = SquelchingLeeches;
