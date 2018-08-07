"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThallidOmnivore extends UnimplementedCard {
  constructor (game) {
    super(game, "Thallid Omnivore", "Dominaria", "DOM");
  }
}

module.exports = ThallidOmnivore;
