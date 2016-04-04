"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RootCage extends Card {
  constructor(game) {
    super(game, "Root Cage", "Prophecy", "PCY");
  }
}

module.exports = RootCage;
