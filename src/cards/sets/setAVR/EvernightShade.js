"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EvernightShade extends UnimplementedCard {
  constructor (game) {
    super(game, "Evernight Shade", "Avacyn Restored", "AVR");
  }
}

module.exports = EvernightShade;
