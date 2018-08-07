"use strict";
const Constants = require ("../../../Constants");
const BaronSengirBase = require("../setMED/BaronSengir");

class BaronSengir extends BaronSengirBase {
  constructor (game) {
    super(game, "Baron Sengir", "Magic Online Promos", "PRM");
  }
}

module.exports = BaronSengir;
