"use strict";
const Constants = require ("../../../Constants");
const BurnAwayBase = require("../setCN2/BurnAway");

class BurnAway extends BurnAwayBase {
  constructor (game) {
    super(game, "Burn Away", "Khans of Tarkir", "KTK");
  }
}

module.exports = BurnAway;
