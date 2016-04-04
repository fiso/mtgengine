"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkyWeaver extends Card {
  constructor(game) {
    super(game, "Sky Weaver", "Invasion", "INV");
  }
}

module.exports = SkyWeaver;
