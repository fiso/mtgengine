"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VesuvanDoppelganger extends UnimplementedCard {
  constructor (game) {
    super(game, "Vesuvan Doppelganger", "Masters Edition", "MED");
  }
}

module.exports = VesuvanDoppelganger;
