"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeralInstinct extends Card {
  constructor(game) {
    super(game, "Feral Instinct", "Visions", "VIS");
  }
}

module.exports = FeralInstinct;
