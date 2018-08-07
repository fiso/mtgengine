"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GarruksPackleader extends UnimplementedCard {
  constructor (game) {
    super(game, "Garruk's Packleader", "Magic 2015", "M15");
  }
}

module.exports = GarruksPackleader;
