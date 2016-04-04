"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HungrySpriggan extends Card {
  constructor(game) {
    super(game, "Hungry Spriggan", "Shadowmoor", "SHM");
  }
}

module.exports = HungrySpriggan;
