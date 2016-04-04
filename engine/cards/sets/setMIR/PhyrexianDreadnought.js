"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianDreadnoughtBase = require("../setpJGP/PhyrexianDreadnought.js");

class PhyrexianDreadnought extends PhyrexianDreadnoughtBase {
  constructor(game) {
    super(game, "Phyrexian Dreadnought", "Mirage", "MIR");
  }
}

module.exports = PhyrexianDreadnought;
