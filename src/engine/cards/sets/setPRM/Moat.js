"use strict";
const Constants = require ("../../../Constants");
const MoatBase = require("../setMED/Moat");

class Moat extends MoatBase {
  constructor (game) {
    super(game, "Moat", "Magic Online Promos", "PRM");
  }
}

module.exports = Moat;
