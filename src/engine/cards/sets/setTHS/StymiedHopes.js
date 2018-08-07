"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StymiedHopes extends UnimplementedCard {
  constructor (game) {
    super(game, "Stymied Hopes", "Theros", "THS");
  }
}

module.exports = StymiedHopes;
