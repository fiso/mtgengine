"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SaprazzanRaider extends Card {
  constructor(game) {
    super(game, "Saprazzan Raider", "Mercadian Masques", "MMQ");
  }
}

module.exports = SaprazzanRaider;
