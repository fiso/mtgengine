"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mountain extends UnimplementedCard {
  constructor (game) {
    super(game, "Mountain", "Anthologies", "ATH");
  }
}

module.exports = Mountain;
