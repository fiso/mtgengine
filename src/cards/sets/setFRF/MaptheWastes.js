"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaptheWastes extends UnimplementedCard {
  constructor(game) {
    super(game, "Map the Wastes", "Fate Reforged", "FRF");
  }
}

module.exports = MaptheWastes;
