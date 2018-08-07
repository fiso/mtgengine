"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MortalFleshIsWeak extends UnimplementedCard {
  constructor (game) {
    super(game, "Mortal Flesh Is Weak", "Archenemy", "ARC");
  }
}

module.exports = MortalFleshIsWeak;
