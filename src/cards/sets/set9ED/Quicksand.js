"use strict";
const Constants = require ("../../../Constants");
const QuicksandBase = require("../setCNS/Quicksand");

class Quicksand extends QuicksandBase {
  constructor (game) {
    super(game, "Quicksand", "Ninth Edition", "9ED");
  }
}

module.exports = Quicksand;
