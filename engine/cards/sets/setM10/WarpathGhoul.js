"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarpathGhoul extends Card {
  constructor(game) {
    super(game, "Warpath Ghoul", "Magic 2010", "M10");
  }
}

module.exports = WarpathGhoul;
