"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PoolingVenom extends Card {
  constructor(game) {
    super(game, "Pooling Venom", "Future Sight", "FUT");
  }
}

module.exports = PoolingVenom;
