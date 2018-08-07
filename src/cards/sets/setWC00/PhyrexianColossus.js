"use strict";
const Constants = require ("../../../Constants");
const PhyrexianColossusBase = require("../setDDE/PhyrexianColossus");

class PhyrexianColossus extends PhyrexianColossusBase {
  constructor (game) {
    super(game, "Phyrexian Colossus", "World Championship Decks 2000", "WC00");
  }
}

module.exports = PhyrexianColossus;
