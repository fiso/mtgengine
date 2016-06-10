"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FowlPlay extends UnimplementedCard {
  constructor (game) {
    super(game, "Fowl Play", "Unglued", "UGL");
  }
}

module.exports = FowlPlay;
