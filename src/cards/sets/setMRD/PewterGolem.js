"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PewterGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Pewter Golem", "Mirrodin", "MRD");
  }
}

module.exports = PewterGolem;
