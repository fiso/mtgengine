"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RebornHope extends UnimplementedCard {
  constructor(game) {
    super(game, "Reborn Hope", "Alara Reborn", "ARB");
  }
}

module.exports = RebornHope;
