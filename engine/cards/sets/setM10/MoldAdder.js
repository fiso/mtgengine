"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoldAdder extends Card {
  constructor(game) {
    super(game, "Mold Adder", "Magic 2010", "M10");
  }
}

module.exports = MoldAdder;
