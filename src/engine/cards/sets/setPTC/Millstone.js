"use strict";
const Constants = require ("../../../Constants");
const MillstoneBase = require("../setM19/Millstone");

class Millstone extends MillstoneBase {
  constructor (game) {
    super(game, "Millstone", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = Millstone;
