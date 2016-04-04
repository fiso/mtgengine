"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManicVandal extends UnimplementedCard {
  constructor(game) {
    super(game, "Manic Vandal", "Magic 2011", "M11");
  }
}

module.exports = ManicVandal;
