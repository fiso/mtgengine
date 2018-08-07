"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HonoredHydra extends UnimplementedCard {
  constructor (game) {
    super(game, "Honored Hydra", "Amonkhet", "AKH");
  }
}

module.exports = HonoredHydra;
