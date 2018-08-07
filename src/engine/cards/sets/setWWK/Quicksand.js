"use strict";
const Constants = require ("../../../Constants");
const QuicksandBase = require("../setA25/Quicksand");

class Quicksand extends QuicksandBase {
  constructor (game) {
    super(game, "Quicksand", "Worldwake", "WWK");
  }
}

module.exports = Quicksand;
