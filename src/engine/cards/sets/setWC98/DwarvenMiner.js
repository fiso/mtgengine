"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenMiner extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Miner", "World Championship Decks 1998", "WC98");
  }
}

module.exports = DwarvenMiner;
