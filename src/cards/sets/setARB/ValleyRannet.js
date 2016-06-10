"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ValleyRannet extends UnimplementedCard {
  constructor (game) {
    super(game, "Valley Rannet", "Alara Reborn", "ARB");
  }
}

module.exports = ValleyRannet;
