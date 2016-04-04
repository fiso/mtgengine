"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DegaSanctuary extends UnimplementedCard {
  constructor(game) {
    super(game, "Dega Sanctuary", "Apocalypse", "APC");
  }
}

module.exports = DegaSanctuary;
