"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpittingImage extends UnimplementedCard {
  constructor(game) {
    super(game, "Spitting Image", "Eventide", "EVE");
  }
}

module.exports = SpittingImage;
