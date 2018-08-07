"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlitteringWish extends UnimplementedCard {
  constructor (game) {
    super(game, "Glittering Wish", "Future Sight", "FUT");
  }
}

module.exports = GlitteringWish;
