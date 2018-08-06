"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadbridgeShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Deadbridge Shaman", "Eternal Masters", "EMA");
  }
}

module.exports = DeadbridgeShaman;
