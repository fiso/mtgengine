"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Opposition extends UnimplementedCard {
  constructor (game) {
    super(game, "Opposition", "Amonkhet Invocations", "MP2");
  }
}

module.exports = Opposition;
