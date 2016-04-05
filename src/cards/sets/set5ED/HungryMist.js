"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HungryMist extends UnimplementedCard {
  constructor(game) {
    super(game, "Hungry Mist", "Fifth Edition", "5ED");
  }
}

module.exports = HungryMist;
