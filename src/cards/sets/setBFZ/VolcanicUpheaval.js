"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicUpheaval extends UnimplementedCard {
  constructor (game) {
    super(game, "Volcanic Upheaval", "Battle for Zendikar", "BFZ");
  }
}

module.exports = VolcanicUpheaval;
