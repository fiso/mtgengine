"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarrinsUnmaking extends UnimplementedCard {
  constructor (game) {
    super(game, "Barrin's Unmaking", "Invasion", "INV");
  }
}

module.exports = BarrinsUnmaking;
