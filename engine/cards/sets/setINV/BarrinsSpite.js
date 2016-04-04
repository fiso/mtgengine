"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarrinsSpite extends Card {
  constructor(game) {
    super(game, "Barrin's Spite", "Invasion", "INV");
  }
}

module.exports = BarrinsSpite;
