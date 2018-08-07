"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiddenGuerrillas extends UnimplementedCard {
  constructor (game) {
    super(game, "Hidden Guerrillas", "Urza's Saga", "USG");
  }
}

module.exports = HiddenGuerrillas;
