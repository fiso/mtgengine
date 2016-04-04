"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GaeasBlessing extends Card {
  constructor(game) {
    super(game, "Gaea's Blessing", "Arena League", "pARL");
  }
}

module.exports = GaeasBlessing;
