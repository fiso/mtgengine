"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThranFoundry extends Card {
  constructor(game) {
    super(game, "Thran Foundry", "Urza's Destiny", "UDS");
  }
}

module.exports = ThranFoundry;
