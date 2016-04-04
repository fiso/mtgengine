"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinMarshal extends Card {
  constructor(game) {
    super(game, "Goblin Marshal", "Urza's Destiny", "UDS");
  }
}

module.exports = GoblinMarshal;
