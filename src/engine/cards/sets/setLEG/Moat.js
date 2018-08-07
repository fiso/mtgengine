"use strict";
const Constants = require ("../../../Constants");
const MoatBase = require("../setMED/Moat");

class Moat extends MoatBase {
  constructor (game) {
    super(game, "Moat", "Legends", "LEG");
  }
}

module.exports = Moat;
