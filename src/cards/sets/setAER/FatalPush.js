"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FatalPush extends UnimplementedCard {
  constructor (game) {
    super(game, "Fatal Push", "Aether Revolt", "AER");
  }
}

module.exports = FatalPush;
