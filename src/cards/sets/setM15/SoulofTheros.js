"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulofTheros extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul of Theros", "Magic 2015", "M15");
  }
}

module.exports = SoulofTheros;
