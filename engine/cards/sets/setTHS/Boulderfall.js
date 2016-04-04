"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Boulderfall extends Card {
  constructor(game) {
    super(game, "Boulderfall", "Theros", "THS");
  }
}

module.exports = Boulderfall;
