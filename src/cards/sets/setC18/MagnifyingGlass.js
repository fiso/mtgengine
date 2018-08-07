"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagnifyingGlass extends UnimplementedCard {
  constructor (game) {
    super(game, "Magnifying Glass", "Commander 2018", "C18");
  }
}

module.exports = MagnifyingGlass;
