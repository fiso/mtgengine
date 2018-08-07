"use strict";
const Constants = require ("../../../Constants");
const PlagueBeetleBase = require("../set10E/PlagueBeetle");

class PlagueBeetle extends PlagueBeetleBase {
  constructor (game) {
    super(game, "Plague Beetle", "Seventh Edition", "7ED");
  }
}

module.exports = PlagueBeetle;
