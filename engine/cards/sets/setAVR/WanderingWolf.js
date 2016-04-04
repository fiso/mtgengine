"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WanderingWolf extends Card {
  constructor(game) {
    super(game, "Wandering Wolf", "Avacyn Restored", "AVR");
  }
}

module.exports = WanderingWolf;
