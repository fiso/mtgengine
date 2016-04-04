"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WailoftheNim extends Card {
  constructor(game) {
    super(game, "Wail of the Nim", "Mirrodin", "MRD");
  }
}

module.exports = WailoftheNim;
