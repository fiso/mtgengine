"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WanderingStream extends Card {
  constructor(game) {
    super(game, "Wandering Stream", "Invasion", "INV");
  }
}

module.exports = WanderingStream;
