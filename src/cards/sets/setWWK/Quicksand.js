"use strict";
const Constants = require ("../../../Constants");
const QuicksandBase = require("../setCNS/Quicksand");

class Quicksand extends QuicksandBase {
  constructor (game) {
    super(game, "Quicksand", "Worldwake", "WWK");
  }
}

module.exports = Quicksand;
