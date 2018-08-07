"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HungryMist extends UnimplementedCard {
  constructor (game) {
    super(game, "Hungry Mist", "Masters Edition", "MED");
  }
}

module.exports = HungryMist;
