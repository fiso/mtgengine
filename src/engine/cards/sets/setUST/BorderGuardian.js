"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorderGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Border Guardian", "Unstable", "UST");
  }
}

module.exports = BorderGuardian;
