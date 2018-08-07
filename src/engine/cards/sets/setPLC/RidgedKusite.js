"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RidgedKusite extends UnimplementedCard {
  constructor (game) {
    super(game, "Ridged Kusite", "Planar Chaos", "PLC");
  }
}

module.exports = RidgedKusite;
