"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LastBreath extends UnimplementedCard {
  constructor (game) {
    super(game, "Last Breath", "Theros", "THS");
  }
}

module.exports = LastBreath;
