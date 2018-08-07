"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NavigatorsCompass extends UnimplementedCard {
  constructor (game) {
    super(game, "Navigator's Compass", "Dominaria", "DOM");
  }
}

module.exports = NavigatorsCompass;
