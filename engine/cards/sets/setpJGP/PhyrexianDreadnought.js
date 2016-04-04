"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianDreadnought extends Card {
  constructor(game) {
    super(game, "Phyrexian Dreadnought", "Judge Gift Program", "pJGP");
  }
}

module.exports = PhyrexianDreadnought;
