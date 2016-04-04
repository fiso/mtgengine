"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClaimofErebos extends Card {
  constructor(game) {
    super(game, "Claim of Erebos", "Born of the Gods", "BNG");
  }
}

module.exports = ClaimofErebos;
