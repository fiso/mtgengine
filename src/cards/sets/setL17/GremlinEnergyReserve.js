"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GremlinEnergyReserve extends UnimplementedCard {
  constructor (game) {
    super(game, "Gremlin // Energy Reserve", "League Tokens 2017", "L17");
  }
}

module.exports = GremlinEnergyReserve;
