"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WorldBottlingKit extends Card {
  constructor(game) {
    super(game, "World-Bottling Kit", "Unhinged", "UNH");
  }
}

module.exports = WorldBottlingKit;
