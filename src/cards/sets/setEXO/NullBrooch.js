"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NullBrooch extends UnimplementedCard {
  constructor (game) {
    super(game, "Null Brooch", "Exodus", "EXO");
  }
}

module.exports = NullBrooch;
