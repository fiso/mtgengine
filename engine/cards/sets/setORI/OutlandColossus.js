"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OutlandColossus extends Card {
  constructor(game) {
    super(game, "Outland Colossus", "Magic Origins", "ORI");
  }
}

module.exports = OutlandColossus;
