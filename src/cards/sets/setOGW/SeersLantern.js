"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeersLantern extends UnimplementedCard {
  constructor(game) {
    super(game, "Seer's Lantern", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SeersLantern;
