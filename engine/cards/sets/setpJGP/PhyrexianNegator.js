"use strict";
const Constants = require ("../../../Constants");
const PhyrexianNegatorBase = require("../setDDE/PhyrexianNegator");

class PhyrexianNegator extends PhyrexianNegatorBase {
  constructor(game) {
    super(game, "Phyrexian Negator", "Judge Gift Program", "pJGP");
  }
}

module.exports = PhyrexianNegator;
