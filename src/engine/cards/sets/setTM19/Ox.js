"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ox extends UnimplementedCard {
  constructor (game) {
    super(game, "Ox", "Core Set 2019 Tokens", "TM19");
  }
}

module.exports = Ox;
