"use strict";
const Constants = require ("../../../Constants");
const PhyrexianDreadnoughtBase = require("../setpJGP/PhyrexianDreadnought");

class PhyrexianDreadnought extends PhyrexianDreadnoughtBase {
  constructor (game) {
    super(game, "Phyrexian Dreadnought", "Mirage", "MIR");
  }
}

module.exports = PhyrexianDreadnought;
