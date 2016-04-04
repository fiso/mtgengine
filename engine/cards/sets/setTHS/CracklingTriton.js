"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CracklingTriton extends Card {
  constructor(game) {
    super(game, "Crackling Triton", "Theros", "THS");
  }
}

module.exports = CracklingTriton;
