"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TangleGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Tangle Golem", "Darksteel", "DST");
  }
}

module.exports = TangleGolem;
