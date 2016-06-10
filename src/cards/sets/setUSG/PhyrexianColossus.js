"use strict";
const Constants = require ("../../../Constants");
const PhyrexianColossusBase = require("../setDDE/PhyrexianColossus");

class PhyrexianColossus extends PhyrexianColossusBase {
  constructor (game) {
    super(game, "Phyrexian Colossus", "Urza's Saga", "USG");
  }
}

module.exports = PhyrexianColossus;
