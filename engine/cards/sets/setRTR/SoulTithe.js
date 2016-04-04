"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulTithe extends Card {
  constructor(game) {
    super(game, "Soul Tithe", "Return to Ravnica", "RTR");
  }
}

module.exports = SoulTithe;
