"use strict";
const Constants = require ("../../../Constants");
const QuicksandBase = require("../setA25/Quicksand");

class Quicksand extends QuicksandBase {
  constructor (game) {
    super(game, "Quicksand", "Tenth Edition", "10E");
  }
}

module.exports = Quicksand;
