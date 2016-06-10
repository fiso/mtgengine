"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicSpray extends UnimplementedCard {
  constructor (game) {
    super(game, "Volcanic Spray", "Odyssey", "ODY");
  }
}

module.exports = VolcanicSpray;
