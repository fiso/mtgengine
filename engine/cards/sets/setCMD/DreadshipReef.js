"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadshipReef extends UnimplementedCard {
  constructor(game) {
    super(game, "Dreadship Reef", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DreadshipReef;
