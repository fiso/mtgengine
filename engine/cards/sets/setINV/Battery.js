"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Battery extends Card {
  constructor(game) {
    super(game, "Battery", "Invasion", "INV");
  }
}

module.exports = Battery;
