"use strict";
const Constants = require ("../../../Constants");
const PhyrexianNegatorBase = require("../setDDE/PhyrexianNegator");

class PhyrexianNegator extends PhyrexianNegatorBase {
  constructor (game) {
    super(game, "Phyrexian Negator", "Magic Online Promos", "PRM");
  }
}

module.exports = PhyrexianNegator;
