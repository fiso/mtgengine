"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarrinsSpite extends UnimplementedCard {
  constructor (game) {
    super(game, "Barrin's Spite", "Invasion", "INV");
  }
}

module.exports = BarrinsSpite;
