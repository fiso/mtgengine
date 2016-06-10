"use strict";
const Constants = require ("../../../Constants");
const MillstoneBase = require("../setATQ/Millstone");

class Millstone extends MillstoneBase {
  constructor (game) {
    super(game, "Millstone", "Fourth Edition", "4ED");
  }
}

module.exports = Millstone;
