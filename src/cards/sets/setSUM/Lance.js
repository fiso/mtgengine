"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lance extends UnimplementedCard {
  constructor (game) {
    super(game, "Lance", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Lance;
