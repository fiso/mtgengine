"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnlicensedDisintegration extends UnimplementedCard {
  constructor (game) {
    super(game, "Unlicensed Disintegration", "Friday Night Magic 2017", "F17");
  }
}

module.exports = UnlicensedDisintegration;
