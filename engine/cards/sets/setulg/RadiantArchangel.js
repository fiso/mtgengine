"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RadiantArchangel extends UnimplementedCard {
  constructor(game) {
    super(game, "Radiant, Archangel", "Urza's Legacy", "ULG");
  }
}

module.exports = RadiantArchangel;
