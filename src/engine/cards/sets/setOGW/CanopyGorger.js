"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CanopyGorger extends UnimplementedCard {
  constructor (game) {
    super(game, "Canopy Gorger", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CanopyGorger;
