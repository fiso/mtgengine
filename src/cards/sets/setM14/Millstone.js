"use strict";
const Constants = require ("../../../Constants");
const MillstoneBase = require("../setATQ/Millstone");

class Millstone extends MillstoneBase {
  constructor (game) {
    super(game, "Millstone", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Millstone;
