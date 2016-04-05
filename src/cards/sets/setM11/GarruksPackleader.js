"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GarruksPackleader extends UnimplementedCard {
  constructor(game) {
    super(game, "Garruk's Packleader", "Magic 2011", "M11");
  }
}

module.exports = GarruksPackleader;
