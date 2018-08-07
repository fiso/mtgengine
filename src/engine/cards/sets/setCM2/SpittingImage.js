"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpittingImage extends UnimplementedCard {
  constructor (game) {
    super(game, "Spitting Image", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = SpittingImage;
