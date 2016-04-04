"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GroveRumbler extends Card {
  constructor(game) {
    super(game, "Grove Rumbler", "Battle for Zendikar", "BFZ");
  }
}

module.exports = GroveRumbler;
