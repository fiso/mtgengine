"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlagueofVermin extends Card {
  constructor(game) {
    super(game, "Plague of Vermin", "Shadowmoor", "SHM");
  }
}

module.exports = PlagueofVermin;
