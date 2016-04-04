"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImmortalServitude extends Card {
  constructor(game) {
    super(game, "Immortal Servitude", "Gatecrash", "GTC");
  }
}

module.exports = ImmortalServitude;
