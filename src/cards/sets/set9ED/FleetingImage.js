"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleetingImage extends UnimplementedCard {
  constructor (game) {
    super(game, "Fleeting Image", "Ninth Edition", "9ED");
  }
}

module.exports = FleetingImage;
