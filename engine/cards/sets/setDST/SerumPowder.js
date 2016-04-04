"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SerumPowder extends Card {
  constructor(game) {
    super(game, "Serum Powder", "Darksteel", "DST");
  }
}

module.exports = SerumPowder;
