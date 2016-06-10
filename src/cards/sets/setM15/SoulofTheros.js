"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulofTheros extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul of Theros", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SoulofTheros;
