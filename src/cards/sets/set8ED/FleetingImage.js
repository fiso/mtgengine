"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleetingImage extends UnimplementedCard {
  constructor (game) {
    super(game, "Fleeting Image", "Eighth Edition", "8ED");
  }
}

module.exports = FleetingImage;
