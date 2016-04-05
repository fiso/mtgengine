"use strict";
const Constants = require ("../../../Constants");
const MillstoneBase = require("../setATQ/Millstone");

class Millstone extends MillstoneBase {
  constructor(game) {
    super(game, "Millstone", "Revised Edition", "3ED");
  }
}

module.exports = Millstone;
