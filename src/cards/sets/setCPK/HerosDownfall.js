"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HerosDownfall extends UnimplementedCard {
  constructor (game) {
    super(game, "Hero's Downfall", "Clash Pack", "CPK");
  }
}

module.exports = HerosDownfall;
