"use strict";
const Constants = require ("../../../Constants");
const MillstoneBase = require("../setM19/Millstone");

class Millstone extends MillstoneBase {
  constructor (game) {
    super(game, "Millstone", "Magic 2014", "M14");
  }
}

module.exports = Millstone;
