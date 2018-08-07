"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormfrontPegasus extends UnimplementedCard {
  constructor (game) {
    super(game, "Stormfront Pegasus", "Welcome Deck 2017", "W17");
  }
}

module.exports = StormfrontPegasus;
