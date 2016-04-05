"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FungalShambler extends UnimplementedCard {
  constructor(game) {
    super(game, "Fungal Shambler", "Apocalypse", "APC");
  }
}

module.exports = FungalShambler;
