"use strict";
const Constants = require ("../../../Constants");
const PhyrexianNegatorBase = require("../setDDE/PhyrexianNegator");

class PhyrexianNegator extends PhyrexianNegatorBase {
  constructor (game) {
    super(game, "Phyrexian Negator", "World Championship Decks 1999", "WC99");
  }
}

module.exports = PhyrexianNegator;
