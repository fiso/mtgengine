"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RootGreevil extends Card {
  constructor(game) {
    super(game, "Root Greevil", "Planeshift", "PLS");
  }
}

module.exports = RootGreevil;
