"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KingCrab extends UnimplementedCard {
  constructor (game) {
    super(game, "King Crab", "Urza's Legacy", "ULG");
  }
}

module.exports = KingCrab;
