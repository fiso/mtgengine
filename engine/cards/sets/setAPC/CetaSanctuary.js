"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CetaSanctuary extends UnimplementedCard {
  constructor(game) {
    super(game, "Ceta Sanctuary", "Apocalypse", "APC");
  }
}

module.exports = CetaSanctuary;
