"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrinkofDisasterBase = require("../setM12/BrinkofDisaster.js");

class BrinkofDisaster extends BrinkofDisasterBase {
  constructor(game) {
    super(game, "Brink of Disaster", "Worldwake", "WWK");
  }
}

module.exports = BrinkofDisaster;
