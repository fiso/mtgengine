"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RageWeaver extends Card {
  constructor(game) {
    super(game, "Rage Weaver", "Invasion", "INV");
  }
}

module.exports = RageWeaver;
