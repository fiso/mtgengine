"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FogofGnats extends UnimplementedCard {
  constructor(game) {
    super(game, "Fog of Gnats", "Urza's Legacy", "ULG");
  }
}

module.exports = FogofGnats;
