"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MillstoneBase = require("../setATQ/Millstone.js");

class Millstone extends MillstoneBase {
  constructor(game) {
    super(game, "Millstone", "Eighth Edition", "8ED");
  }
}

module.exports = Millstone;
