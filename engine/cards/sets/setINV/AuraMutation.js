"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AuraMutation extends Card {
  constructor(game) {
    super(game, "Aura Mutation", "Invasion", "INV");
  }
}

module.exports = AuraMutation;
