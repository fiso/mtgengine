"use strict";
const Constants = require ("../../../Constants");
const Borrowing100000ArrowsBase = require("../setA25/Borrowing100000Arrows");

class Borrowing100000Arrows extends Borrowing100000ArrowsBase {
  constructor (game) {
    super(game, "Borrowing 100,000 Arrows", "Commander 2013", "C13");
  }
}

module.exports = Borrowing100000Arrows;
