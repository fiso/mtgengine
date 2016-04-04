"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TowerDrake extends Card {
  constructor(game) {
    super(game, "Tower Drake", "Invasion", "INV");
  }
}

module.exports = TowerDrake;
