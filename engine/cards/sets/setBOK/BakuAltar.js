"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BakuAltar extends Card {
  constructor(game) {
    super(game, "Baku Altar", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = BakuAltar;
