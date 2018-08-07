"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmissarysPloy extends UnimplementedCard {
  constructor (game) {
    super(game, "Emissary's Ploy", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = EmissarysPloy;
