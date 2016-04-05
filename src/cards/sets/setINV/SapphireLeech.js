"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SapphireLeech extends UnimplementedCard {
  constructor(game) {
    super(game, "Sapphire Leech", "Invasion", "INV");
  }
}

module.exports = SapphireLeech;
