"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bat extends UnimplementedCard {
  constructor (game) {
    super(game, "Bat", "Core Set 2019 Tokens", "TM19");
  }
}

module.exports = Bat;
