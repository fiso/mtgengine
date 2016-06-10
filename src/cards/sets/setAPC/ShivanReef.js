"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShivanReef extends UnimplementedCard {
  constructor (game) {
    super(game, "Shivan Reef", "Apocalypse", "APC");
  }
}

module.exports = ShivanReef;
