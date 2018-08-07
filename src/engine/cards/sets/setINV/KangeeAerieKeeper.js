"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KangeeAerieKeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Kangee, Aerie Keeper", "Invasion", "INV");
  }
}

module.exports = KangeeAerieKeeper;
