"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PowerstoneShard extends UnimplementedCard {
  constructor (game) {
    super(game, "Powerstone Shard", "Dominaria", "DOM");
  }
}

module.exports = PowerstoneShard;
