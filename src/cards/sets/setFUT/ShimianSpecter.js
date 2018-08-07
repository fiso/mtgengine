"use strict";
const Constants = require ("../../../Constants");
const ShimianSpecterBase = require("../setM13/ShimianSpecter");

class ShimianSpecter extends ShimianSpecterBase {
  constructor (game) {
    super(game, "Shimian Specter", "Future Sight", "FUT");
  }
}

module.exports = ShimianSpecter;
