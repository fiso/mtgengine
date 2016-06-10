"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LlanowarSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Llanowar Sentinel", "Tenth Edition", "10E");
  }
}

module.exports = LlanowarSentinel;
