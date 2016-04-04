"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MaptheWastes extends Card {
  constructor(game) {
    super(game, "Map the Wastes", "Fate Reforged", "FRF");
  }
}

module.exports = MaptheWastes;
