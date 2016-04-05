"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BaronyVampire extends UnimplementedCard {
  constructor(game) {
    super(game, "Barony Vampire", "Magic 2011", "M11");
  }
}

module.exports = BaronyVampire;
