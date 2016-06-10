"use strict";
const Constants = require ("../../../Constants");
const MillstoneBase = require("../setATQ/Millstone");

class Millstone extends MillstoneBase {
  constructor (game) {
    super(game, "Millstone", "Tenth Edition", "10E");
  }
}

module.exports = Millstone;
