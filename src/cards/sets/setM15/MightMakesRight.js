"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MightMakesRight extends UnimplementedCard {
  constructor (game) {
    super(game, "Might Makes Right", "Magic 2015 Core Set", "M15");
  }
}

module.exports = MightMakesRight;
