"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TavernSwindler extends UnimplementedCard {
  constructor (game) {
    super(game, "Tavern Swindler", "Battlebond", "BBD");
  }
}

module.exports = TavernSwindler;
