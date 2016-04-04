"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpitefulReturned extends UnimplementedCard {
  constructor(game) {
    super(game, "Spiteful Returned", "Born of the Gods", "BNG");
  }
}

module.exports = SpitefulReturned;
