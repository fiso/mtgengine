"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LetheLake extends Card {
  constructor(game) {
    super(game, "Lethe Lake", "Planechase", "HOP");
  }
}

module.exports = LetheLake;
