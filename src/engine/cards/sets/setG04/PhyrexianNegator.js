"use strict";
const Constants = require ("../../../Constants");
const PhyrexianNegatorBase = require("../setDDE/PhyrexianNegator");

class PhyrexianNegator extends PhyrexianNegatorBase {
  constructor (game) {
    super(game, "Phyrexian Negator", "Judge Gift Cards 2004", "G04");
  }
}

module.exports = PhyrexianNegator;
