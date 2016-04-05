"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorderGuard extends UnimplementedCard {
  constructor(game) {
    super(game, "Border Guard", "Portal", "POR");
  }
}

module.exports = BorderGuard;
