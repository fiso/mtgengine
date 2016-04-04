"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HinderingLight extends Card {
  constructor(game) {
    super(game, "Hindering Light", "Shards of Alara", "ALA");
  }
}

module.exports = HinderingLight;
