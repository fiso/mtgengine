"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Landslide extends UnimplementedCard {
  constructor (game) {
    super(game, "Landslide", "Urza's Destiny", "UDS");
  }
}

module.exports = Landslide;
