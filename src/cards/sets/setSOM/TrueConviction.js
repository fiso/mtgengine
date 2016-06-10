"use strict";
const Constants = require ("../../../Constants");
const TrueConvictionBase = require("../setC14/TrueConviction");

class TrueConviction extends TrueConvictionBase {
  constructor (game) {
    super(game, "True Conviction", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TrueConviction;
