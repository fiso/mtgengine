"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShivanPhoenix extends UnimplementedCard {
  constructor (game) {
    super(game, "Shivan Phoenix", "Urza's Legacy", "ULG");
  }
}

module.exports = ShivanPhoenix;
