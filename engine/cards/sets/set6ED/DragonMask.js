"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonMask extends Card {
  constructor(game) {
    super(game, "Dragon Mask", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DragonMask;
