"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicIsland extends UnimplementedCard {
  constructor (game) {
    super(game, "Volcanic Island", "Vintage Masters", "VMA");
  }
}

module.exports = VolcanicIsland;
