"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RollingStones extends Card {
  constructor(game) {
    super(game, "Rolling Stones", "Eighth Edition", "8ED");
  }
}

module.exports = RollingStones;
