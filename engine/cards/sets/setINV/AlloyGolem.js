"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlloyGolem extends Card {
  constructor(game) {
    super(game, "Alloy Golem", "Invasion", "INV");
  }
}

module.exports = AlloyGolem;
