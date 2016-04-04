"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TeferisCurse extends Card {
  constructor(game) {
    super(game, "Teferi's Curse", "Mirage", "MIR");
  }
}

module.exports = TeferisCurse;
