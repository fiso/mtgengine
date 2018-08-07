"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FloodPlain extends UnimplementedCard {
  constructor (game) {
    super(game, "Flood Plain", "Vintage Masters", "VMA");
  }
}

module.exports = FloodPlain;
