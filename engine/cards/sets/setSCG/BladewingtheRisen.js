"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BladewingtheRisenBase = require("../setDRB/BladewingtheRisen.js");

class BladewingtheRisen extends BladewingtheRisenBase {
  constructor(game) {
    super(game, "Bladewing the Risen", "Scourge", "SCG");
  }
}

module.exports = BladewingtheRisen;
