"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantasmalAbomination extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantasmal Abomination", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = PhantasmalAbomination;
