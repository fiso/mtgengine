"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WoodedBastion extends Card {
  constructor(game) {
    super(game, "Wooded Bastion", "Shadowmoor", "SHM");
  }
}

module.exports = WoodedBastion;
