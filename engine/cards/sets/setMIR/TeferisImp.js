"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TeferisImp extends Card {
  constructor(game) {
    super(game, "Teferi's Imp", "Mirage", "MIR");
  }
}

module.exports = TeferisImp;
