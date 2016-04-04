"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ragnar extends Card {
  constructor(game) {
    super(game, "Ragnar", "Legends", "LEG");
  }
}

module.exports = Ragnar;
