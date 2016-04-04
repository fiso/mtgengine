"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChaosWarp extends Card {
  constructor(game) {
    super(game, "Chaos Warp", "Commander 2014", "C14");
  }
}

module.exports = ChaosWarp;
