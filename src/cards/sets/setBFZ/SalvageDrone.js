"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SalvageDrone extends UnimplementedCard {
  constructor (game) {
    super(game, "Salvage Drone", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SalvageDrone;
