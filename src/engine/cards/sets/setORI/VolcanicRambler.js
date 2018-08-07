"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicRambler extends UnimplementedCard {
  constructor (game) {
    super(game, "Volcanic Rambler", "Magic Origins", "ORI");
  }
}

module.exports = VolcanicRambler;
