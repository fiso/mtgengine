"use strict";
const Constants = require ("../../../Constants");
const BaronSengirBase = require("../setHML/BaronSengir");

class BaronSengir extends BaronSengirBase {
  constructor(game) {
    super(game, "Baron Sengir", "Masters Edition", "MED");
  }
}

module.exports = BaronSengir;
