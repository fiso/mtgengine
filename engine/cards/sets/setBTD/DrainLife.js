"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrainLife extends Card {
  constructor(game) {
    super(game, "Drain Life", "Beatdown Box Set", "BTD");
  }
}

module.exports = DrainLife;
