"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrandedBrawlers extends Card {
  constructor(game) {
    super(game, "Branded Brawlers", "Prophecy", "PCY");
  }
}

module.exports = BrandedBrawlers;
