"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KhalniHydra extends UnimplementedCard {
  constructor (game) {
    super(game, "Khalni Hydra", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = KhalniHydra;
