"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KhalniHydra extends Card {
  constructor(game) {
    super(game, "Khalni Hydra", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = KhalniHydra;
