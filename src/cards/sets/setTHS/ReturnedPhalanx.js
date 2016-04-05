"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReturnedPhalanx extends UnimplementedCard {
  constructor(game) {
    super(game, "Returned Phalanx", "Theros", "THS");
  }
}

module.exports = ReturnedPhalanx;
