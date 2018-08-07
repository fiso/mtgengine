"use strict";
const Constants = require ("../../../Constants");
const MillstoneBase = require("../setM19/Millstone");

class Millstone extends MillstoneBase {
  constructor (game) {
    super(game, "Millstone", "Tenth Edition", "10E");
  }
}

module.exports = Millstone;
