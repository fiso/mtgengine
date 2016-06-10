"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BroodKeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Brood Keeper", "Magic 2015 Core Set", "M15");
  }
}

module.exports = BroodKeeper;
