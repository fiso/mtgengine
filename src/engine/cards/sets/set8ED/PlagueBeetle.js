"use strict";
const Constants = require ("../../../Constants");
const PlagueBeetleBase = require("../set10E/PlagueBeetle");

class PlagueBeetle extends PlagueBeetleBase {
  constructor (game) {
    super(game, "Plague Beetle", "Eighth Edition", "8ED");
  }
}

module.exports = PlagueBeetle;
