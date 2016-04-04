"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VentifactBottle extends Card {
  constructor(game) {
    super(game, "Ventifact Bottle", "Mirage", "MIR");
  }
}

module.exports = VentifactBottle;
