"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiptideCrab extends Card {
  constructor(game) {
    super(game, "Riptide Crab", "Invasion", "INV");
  }
}

module.exports = RiptideCrab;
