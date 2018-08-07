"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HungryLynx extends UnimplementedCard {
  constructor (game) {
    super(game, "Hungry Lynx", "Commander 2017", "C17");
  }
}

module.exports = HungryLynx;
