"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarrinsUnmaking extends Card {
  constructor(game) {
    super(game, "Barrin's Unmaking", "Invasion", "INV");
  }
}

module.exports = BarrinsUnmaking;
