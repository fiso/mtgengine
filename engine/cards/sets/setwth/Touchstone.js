"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Touchstone extends Card {
  constructor(game) {
    super(game, "Touchstone", "Weatherlight", "WTH");
  }
}

module.exports = Touchstone;
