"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpyKit extends UnimplementedCard {
  constructor (game) {
    super(game, "Spy Kit", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = SpyKit;
