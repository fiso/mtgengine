"use strict";
const Constants = require ("../../../Constants");
const MillstoneBase = require("../setATQ/Millstone");

class Millstone extends MillstoneBase {
  constructor(game) {
    super(game, "Millstone", "Ninth Edition", "9ED");
  }
}

module.exports = Millstone;
