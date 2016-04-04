"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NemataGroveGuardian extends Card {
  constructor(game) {
    super(game, "Nemata, Grove Guardian", "Planeshift", "PLS");
  }
}

module.exports = NemataGroveGuardian;
