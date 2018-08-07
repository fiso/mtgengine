"use strict";
const Constants = require ("../../../Constants");
const PhyrexianColossusBase = require("../setDDE/PhyrexianColossus");

class PhyrexianColossus extends PhyrexianColossusBase {
  constructor (game) {
    super(game, "Phyrexian Colossus", "Seventh Edition", "7ED");
  }
}

module.exports = PhyrexianColossus;
