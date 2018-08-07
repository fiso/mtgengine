"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantomNantuko extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantom Nantuko", "Commander Anthology", "CMA");
  }
}

module.exports = PhantomNantuko;
