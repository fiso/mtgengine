"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarshmistTitan extends UnimplementedCard {
  constructor (game) {
    super(game, "Marshmist Titan", "Born of the Gods", "BNG");
  }
}

module.exports = MarshmistTitan;
