"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrPrototype extends UnimplementedCard {
  constructor (game) {
    super(game, "Myr Prototype", "Mirrodin", "MRD");
  }
}

module.exports = MyrPrototype;
