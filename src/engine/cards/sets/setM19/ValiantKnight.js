"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ValiantKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Valiant Knight", "Core Set 2019", "M19");
  }
}

module.exports = ValiantKnight;
