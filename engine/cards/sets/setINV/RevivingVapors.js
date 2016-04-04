"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RevivingVapors extends Card {
  constructor(game) {
    super(game, "Reviving Vapors", "Invasion", "INV");
  }
}

module.exports = RevivingVapors;
