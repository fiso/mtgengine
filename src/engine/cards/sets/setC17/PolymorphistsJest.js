"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PolymorphistsJest extends UnimplementedCard {
  constructor (game) {
    super(game, "Polymorphist's Jest", "Commander 2017", "C17");
  }
}

module.exports = PolymorphistsJest;
