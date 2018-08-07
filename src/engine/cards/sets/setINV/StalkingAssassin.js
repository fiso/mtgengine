"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StalkingAssassin extends UnimplementedCard {
  constructor (game) {
    super(game, "Stalking Assassin", "Invasion", "INV");
  }
}

module.exports = StalkingAssassin;
