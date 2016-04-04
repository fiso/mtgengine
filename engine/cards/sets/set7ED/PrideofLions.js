"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrideofLionsBase = require("../setDDH/PrideofLions.js");

class PrideofLions extends PrideofLionsBase {
  constructor(game) {
    super(game, "Pride of Lions", "Seventh Edition", "7ED");
  }
}

module.exports = PrideofLions;
