"use strict";
const Constants = require ("../../../Constants");
const MillstoneBase = require("../setATQ/Millstone");

class Millstone extends MillstoneBase {
  constructor (game) {
    super(game, "Millstone", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Millstone;
