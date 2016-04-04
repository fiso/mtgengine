"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GodlessShrine extends Card {
  constructor(game) {
    super(game, "Godless Shrine", "Gatecrash", "GTC");
  }
}

module.exports = GodlessShrine;
