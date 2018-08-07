"use strict";
const Constants = require ("../../../Constants");
const PhyrexianDreadnoughtBase = require("../setG10/PhyrexianDreadnought");

class PhyrexianDreadnought extends PhyrexianDreadnoughtBase {
  constructor (game) {
    super(game, "Phyrexian Dreadnought", "Mirage", "MIR");
  }
}

module.exports = PhyrexianDreadnought;
