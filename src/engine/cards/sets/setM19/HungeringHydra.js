"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HungeringHydra extends UnimplementedCard {
  constructor (game) {
    super(game, "Hungering Hydra", "Core Set 2019", "M19");
  }
}

module.exports = HungeringHydra;
