"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShimianSpecterBase = require("../setFUT/ShimianSpecter.js");

class ShimianSpecter extends ShimianSpecterBase {
  constructor(game) {
    super(game, "Shimian Specter", "Magic 2013", "M13");
  }
}

module.exports = ShimianSpecter;
