"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoonSatyr extends UnimplementedCard {
  constructor(game) {
    super(game, "Boon Satyr", "Theros", "THS");
  }
}

module.exports = BoonSatyr;
