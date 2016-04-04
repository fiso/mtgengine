"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianFurnace extends Card {
  constructor(game) {
    super(game, "Phyrexian Furnace", "Weatherlight", "WTH");
  }
}

module.exports = PhyrexianFurnace;
