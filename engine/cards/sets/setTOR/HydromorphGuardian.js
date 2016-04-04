"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HydromorphGuardian extends Card {
  constructor(game) {
    super(game, "Hydromorph Guardian", "Torment", "TOR");
  }
}

module.exports = HydromorphGuardian;
