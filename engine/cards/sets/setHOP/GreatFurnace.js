"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GreatFurnaceBase = require("../setC14/GreatFurnace.js");

class GreatFurnace extends GreatFurnaceBase {
  constructor(game) {
    super(game, "Great Furnace", "Planechase", "HOP");
  }
}

module.exports = GreatFurnace;
