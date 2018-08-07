"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TilonallisCrown extends UnimplementedCard {
  constructor (game) {
    super(game, "Tilonalli's Crown", "Rivals of Ixalan", "RIX");
  }
}

module.exports = TilonallisCrown;
