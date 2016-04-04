"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WuEliteCavalry extends UnimplementedCard {
  constructor(game) {
    super(game, "Wu Elite Cavalry", "Masters Edition III", "ME3");
  }
}

module.exports = WuEliteCavalry;
