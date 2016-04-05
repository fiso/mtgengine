"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeeringEmblem extends UnimplementedCard {
  constructor(game) {
    super(game, "Leering Emblem", "Eventide", "EVE");
  }
}

module.exports = LeeringEmblem;
