"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PoolingVenom extends UnimplementedCard {
  constructor (game) {
    super(game, "Pooling Venom", "Future Sight", "FUT");
  }
}

module.exports = PoolingVenom;
