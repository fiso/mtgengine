"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SickleDancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Sickle Dancer", "Battlebond", "BBD");
  }
}

module.exports = SickleDancer;
