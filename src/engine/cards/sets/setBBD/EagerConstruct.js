"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EagerConstruct extends UnimplementedCard {
  constructor (game) {
    super(game, "Eager Construct", "Battlebond", "BBD");
  }
}

module.exports = EagerConstruct;
