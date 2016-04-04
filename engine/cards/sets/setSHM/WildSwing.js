"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildSwing extends Card {
  constructor(game) {
    super(game, "Wild Swing", "Shadowmoor", "SHM");
  }
}

module.exports = WildSwing;
