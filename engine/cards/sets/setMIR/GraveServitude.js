"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraveServitude extends Card {
  constructor(game) {
    super(game, "Grave Servitude", "Mirage", "MIR");
  }
}

module.exports = GraveServitude;
