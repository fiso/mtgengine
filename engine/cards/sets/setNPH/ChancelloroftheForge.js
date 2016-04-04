"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChancelloroftheForge extends Card {
  constructor(game) {
    super(game, "Chancellor of the Forge", "New Phyrexia", "NPH");
  }
}

module.exports = ChancelloroftheForge;
