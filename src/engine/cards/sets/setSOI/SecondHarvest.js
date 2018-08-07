"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SecondHarvest extends UnimplementedCard {
  constructor (game) {
    super(game, "Second Harvest", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SecondHarvest;
