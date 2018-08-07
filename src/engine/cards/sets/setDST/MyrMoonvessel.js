"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrMoonvessel extends UnimplementedCard {
  constructor (game) {
    super(game, "Myr Moonvessel", "Darksteel", "DST");
  }
}

module.exports = MyrMoonvessel;
