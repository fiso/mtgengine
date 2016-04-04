"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Yare extends Card {
  constructor(game) {
    super(game, "Yare", "Mirage", "MIR");
  }
}

module.exports = Yare;
