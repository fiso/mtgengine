"use strict";
const Constants = require ("../../../Constants");
const PhyrexianDreadnoughtBase = require("../setG10/PhyrexianDreadnought");

class PhyrexianDreadnought extends PhyrexianDreadnoughtBase {
  constructor (game) {
    super(game, "Phyrexian Dreadnought", "Magic Online Promos", "PRM");
  }
}

module.exports = PhyrexianDreadnought;
