"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrazenFreebooter extends UnimplementedCard {
  constructor (game) {
    super(game, "Brazen Freebooter", "Rivals of Ixalan", "RIX");
  }
}

module.exports = BrazenFreebooter;
