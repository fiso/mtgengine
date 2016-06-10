"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeadGames extends UnimplementedCard {
  constructor (game) {
    super(game, "Head Games", "Onslaught", "ONS");
  }
}

module.exports = HeadGames;
