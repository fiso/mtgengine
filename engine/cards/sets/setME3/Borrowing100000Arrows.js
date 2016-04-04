"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const Borrowing100000ArrowsBase = require("../setC13/Borrowing100000Arrows.js");

class Borrowing100000Arrows extends Borrowing100000ArrowsBase {
  constructor(game) {
    super(game, "Borrowing 100,000 Arrows", "Masters Edition III", "ME3");
  }
}

module.exports = Borrowing100000Arrows;
