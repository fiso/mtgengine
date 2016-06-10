"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WormHarvest extends UnimplementedCard {
  constructor (game) {
    super(game, "Worm Harvest", "Eventide", "EVE");
  }
}

module.exports = WormHarvest;
