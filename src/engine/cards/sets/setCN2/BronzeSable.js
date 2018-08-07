"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BronzeSable extends UnimplementedCard {
  constructor (game) {
    super(game, "Bronze Sable", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = BronzeSable;
