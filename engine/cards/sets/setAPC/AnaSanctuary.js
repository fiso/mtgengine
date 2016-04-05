"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnaSanctuary extends UnimplementedCard {
  constructor(game) {
    super(game, "Ana Sanctuary", "Apocalypse", "APC");
  }
}

module.exports = AnaSanctuary;
