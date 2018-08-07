"use strict";
const Constants = require ("../../../Constants");
const QuicksandBase = require("../setA25/Quicksand");

class Quicksand extends QuicksandBase {
  constructor (game) {
    super(game, "Quicksand", "Visions", "VIS");
  }
}

module.exports = Quicksand;
