"use strict";
const Constants = require ("../../../Constants");
const BrinkofDisasterBase = require("../setM12/BrinkofDisaster");

class BrinkofDisaster extends BrinkofDisasterBase {
  constructor (game) {
    super(game, "Brink of Disaster", "Worldwake", "WWK");
  }
}

module.exports = BrinkofDisaster;
