"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VigilantMartyr extends Card {
  constructor(game) {
    super(game, "Vigilant Martyr", "Mirage", "MIR");
  }
}

module.exports = VigilantMartyr;
