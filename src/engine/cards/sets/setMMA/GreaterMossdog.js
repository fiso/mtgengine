"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreaterMossdog extends UnimplementedCard {
  constructor (game) {
    super(game, "Greater Mossdog", "Modern Masters", "MMA");
  }
}

module.exports = GreaterMossdog;
