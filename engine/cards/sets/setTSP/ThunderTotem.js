"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThunderTotem extends Card {
  constructor(game) {
    super(game, "Thunder Totem", "Time Spiral", "TSP");
  }
}

module.exports = ThunderTotem;
