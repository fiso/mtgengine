"use strict";
const Constants = require ("../../../Constants");
const ShimianSpecterBase = require("../setFUT/ShimianSpecter");

class ShimianSpecter extends ShimianSpecterBase {
  constructor (game) {
    super(game, "Shimian Specter", "Magic 2013", "M13");
  }
}

module.exports = ShimianSpecter;
