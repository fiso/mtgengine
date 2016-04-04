"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlitteringWish extends Card {
  constructor(game) {
    super(game, "Glittering Wish", "Future Sight", "FUT");
  }
}

module.exports = GlitteringWish;
