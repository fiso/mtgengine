"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantasmalMount extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantasmal Mount", "Masters Edition II", "ME2");
  }
}

module.exports = PhantasmalMount;
