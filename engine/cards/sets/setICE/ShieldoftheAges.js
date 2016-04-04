"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShieldoftheAges extends Card {
  constructor(game) {
    super(game, "Shield of the Ages", "Ice Age", "ICE");
  }
}

module.exports = ShieldoftheAges;
