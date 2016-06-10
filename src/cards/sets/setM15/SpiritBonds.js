"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritBonds extends UnimplementedCard {
  constructor (game) {
    super(game, "Spirit Bonds", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SpiritBonds;
