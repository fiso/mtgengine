"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MerfolkRaiders extends Card {
  constructor(game) {
    super(game, "Merfolk Raiders", "Mirage", "MIR");
  }
}

module.exports = MerfolkRaiders;
