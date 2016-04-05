"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CompositeGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Composite Golem", "Fifth Dawn", "5DN");
  }
}

module.exports = CompositeGolem;
