"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HornedCheetah extends Card {
  constructor(game) {
    super(game, "Horned Cheetah", "Invasion", "INV");
  }
}

module.exports = HornedCheetah;
