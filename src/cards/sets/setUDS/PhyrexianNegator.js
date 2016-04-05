"use strict";
const Constants = require ("../../../Constants");
const PhyrexianNegatorBase = require("../setDDE/PhyrexianNegator");

class PhyrexianNegator extends PhyrexianNegatorBase {
  constructor(game) {
    super(game, "Phyrexian Negator", "Urza's Destiny", "UDS");
  }
}

module.exports = PhyrexianNegator;
