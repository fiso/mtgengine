"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlitteringLion extends Card {
  constructor(game) {
    super(game, "Glittering Lion", "Prophecy", "PCY");
  }
}

module.exports = GlitteringLion;
