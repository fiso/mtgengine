"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bust extends Card {
  constructor(game) {
    super(game, "Bust", "Planar Chaos", "PLC");
  }
}

module.exports = Bust;
