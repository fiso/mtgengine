"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VioletPall extends Card {
  constructor(game) {
    super(game, "Violet Pall", "Morningtide", "MOR");
  }
}

module.exports = VioletPall;
