"use strict";
const Constants = require ("../../../Constants");
const MillstoneBase = require("../setM19/Millstone");

class Millstone extends MillstoneBase {
  constructor (game) {
    super(game, "Millstone", "Ninth Edition", "9ED");
  }
}

module.exports = Millstone;
