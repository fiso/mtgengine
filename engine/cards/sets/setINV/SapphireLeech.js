"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SapphireLeech extends Card {
  constructor(game) {
    super(game, "Sapphire Leech", "Invasion", "INV");
  }
}

module.exports = SapphireLeech;
