"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThrummingStone extends Card {
  constructor(game) {
    super(game, "Thrumming Stone", "Coldsnap", "CSP");
  }
}

module.exports = ThrummingStone;
