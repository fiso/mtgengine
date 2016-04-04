"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianTower extends Card {
  constructor(game) {
    super(game, "Phyrexian Tower", "Urza's Saga", "USG");
  }
}

module.exports = PhyrexianTower;
