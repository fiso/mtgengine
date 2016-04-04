"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Overabundance extends Card {
  constructor(game) {
    super(game, "Overabundance", "Invasion", "INV");
  }
}

module.exports = Overabundance;
