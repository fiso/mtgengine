"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShieldDancer extends Card {
  constructor(game) {
    super(game, "Shield Dancer", "Prophecy", "PCY");
  }
}

module.exports = ShieldDancer;
