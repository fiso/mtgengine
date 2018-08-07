"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Knight extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight", "Core Set 2019 Tokens", "TM19");
  }
}

module.exports = Knight;
