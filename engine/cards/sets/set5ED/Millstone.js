"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MillstoneBase = require("../setATQ/Millstone.js");

class Millstone extends MillstoneBase {
  constructor(game) {
    super(game, "Millstone", "Fifth Edition", "5ED");
  }
}

module.exports = Millstone;
