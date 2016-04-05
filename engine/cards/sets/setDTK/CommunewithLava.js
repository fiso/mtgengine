"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CommunewithLava extends UnimplementedCard {
  constructor(game) {
    super(game, "Commune with Lava", "Dragons of Tarkir", "DTK");
  }
}

module.exports = CommunewithLava;
