"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BaronSengirBase = require("../setHML/BaronSengir.js");

class BaronSengir extends BaronSengirBase {
  constructor(game) {
    super(game, "Baron Sengir", "Masters Edition", "MED");
  }
}

module.exports = BaronSengir;
