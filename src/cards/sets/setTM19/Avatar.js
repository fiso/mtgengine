"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Avatar extends UnimplementedCard {
  constructor (game) {
    super(game, "Avatar", "Core Set 2019 Tokens", "TM19");
  }
}

module.exports = Avatar;
