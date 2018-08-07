"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToriiWatchward extends UnimplementedCard {
  constructor (game) {
    super(game, "Torii Watchward", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ToriiWatchward;
