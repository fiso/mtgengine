"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianNegatorBase = require("../setDDE/PhyrexianNegator.js");

class PhyrexianNegator extends PhyrexianNegatorBase {
  constructor(game) {
    super(game, "Phyrexian Negator", "Judge Gift Program", "pJGP");
  }
}

module.exports = PhyrexianNegator;
