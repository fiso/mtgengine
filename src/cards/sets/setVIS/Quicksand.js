"use strict";
const Constants = require ("../../../Constants");
const QuicksandBase = require("../setCNS/Quicksand");

class Quicksand extends QuicksandBase {
  constructor(game) {
    super(game, "Quicksand", "Visions", "VIS");
  }
}

module.exports = Quicksand;
