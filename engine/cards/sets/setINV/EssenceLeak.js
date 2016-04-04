"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EssenceLeak extends Card {
  constructor(game) {
    super(game, "Essence Leak", "Invasion", "INV");
  }
}

module.exports = EssenceLeak;
