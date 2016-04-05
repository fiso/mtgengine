"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RadiantFlames extends UnimplementedCard {
  constructor(game) {
    super(game, "Radiant Flames", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RadiantFlames;
