"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrborgShambler extends UnimplementedCard {
  constructor (game) {
    super(game, "Urborg Shambler", "Invasion", "INV");
  }
}

module.exports = UrborgShambler;
