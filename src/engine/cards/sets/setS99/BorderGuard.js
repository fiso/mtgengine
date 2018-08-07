"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorderGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Border Guard", "Starter 1999", "S99");
  }
}

module.exports = BorderGuard;
