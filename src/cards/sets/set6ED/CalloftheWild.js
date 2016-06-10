"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalloftheWild extends UnimplementedCard {
  constructor (game) {
    super(game, "Call of the Wild", "Classic Sixth Edition", "6ED");
  }
}

module.exports = CalloftheWild;
