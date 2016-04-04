"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BouncingBeebles extends UnimplementedCard {
  constructor(game) {
    super(game, "Bouncing Beebles", "Urza's Legacy", "ULG");
  }
}

module.exports = BouncingBeebles;
