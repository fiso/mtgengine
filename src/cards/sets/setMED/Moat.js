"use strict";
const Constants = require ("../../../Constants");
const MoatBase = require("../setLEG/Moat");

class Moat extends MoatBase {
  constructor (game) {
    super(game, "Moat", "Masters Edition", "MED");
  }
}

module.exports = Moat;
