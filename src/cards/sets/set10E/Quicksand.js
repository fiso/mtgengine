"use strict";
const Constants = require ("../../../Constants");
const QuicksandBase = require("../setCNS/Quicksand");

class Quicksand extends QuicksandBase {
  constructor(game) {
    super(game, "Quicksand", "Tenth Edition", "10E");
  }
}

module.exports = Quicksand;
