"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GodsWilling extends UnimplementedCard {
  constructor(game) {
    super(game, "Gods Willing", "Theros", "THS");
  }
}

module.exports = GodsWilling;
