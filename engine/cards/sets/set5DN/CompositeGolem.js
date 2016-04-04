"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CompositeGolem extends Card {
  constructor(game) {
    super(game, "Composite Golem", "Fifth Dawn", "5DN");
  }
}

module.exports = CompositeGolem;
