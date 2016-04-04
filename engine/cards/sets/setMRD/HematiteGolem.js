"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HematiteGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Hematite Golem", "Mirrodin", "MRD");
  }
}

module.exports = HematiteGolem;
