"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrissSamiteGuardian extends Card {
  constructor(game) {
    super(game, "Oriss, Samite Guardian", "Future Sight", "FUT");
  }
}

module.exports = OrissSamiteGuardian;
