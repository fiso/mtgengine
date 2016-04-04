"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrueConvictionBase = require("../setC14/TrueConviction.js");

class TrueConviction extends TrueConvictionBase {
  constructor(game) {
    super(game, "True Conviction", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TrueConviction;
