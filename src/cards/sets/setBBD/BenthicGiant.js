"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenthicGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Benthic Giant", "Battlebond", "BBD");
  }
}

module.exports = BenthicGiant;
