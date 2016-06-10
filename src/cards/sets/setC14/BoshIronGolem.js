"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoshIronGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Bosh, Iron Golem", "Commander 2014", "C14");
  }
}

module.exports = BoshIronGolem;
