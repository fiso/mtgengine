"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantasmalMount extends UnimplementedCard {
  constructor(game) {
    super(game, "Phantasmal Mount", "Ice Age", "ICE");
  }
}

module.exports = PhantasmalMount;
