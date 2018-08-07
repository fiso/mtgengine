"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SaprolingInfestation extends UnimplementedCard {
  constructor (game) {
    super(game, "Saproling Infestation", "Invasion", "INV");
  }
}

module.exports = SaprolingInfestation;
