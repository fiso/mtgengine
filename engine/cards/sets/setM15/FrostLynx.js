"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrostLynx extends UnimplementedCard {
  constructor(game) {
    super(game, "Frost Lynx", "Magic 2015 Core Set", "M15");
  }
}

module.exports = FrostLynx;
