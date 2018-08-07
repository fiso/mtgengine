"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodTribute extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Tribute", "Commander 2017", "C17");
  }
}

module.exports = BloodTribute;
