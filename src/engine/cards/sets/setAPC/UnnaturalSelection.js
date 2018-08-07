"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnnaturalSelection extends UnimplementedCard {
  constructor (game) {
    super(game, "Unnatural Selection", "Apocalypse", "APC");
  }
}

module.exports = UnnaturalSelection;
