"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HammerofPurphoros extends UnimplementedCard {
  constructor(game) {
    super(game, "Hammer of Purphoros", "Theros", "THS");
  }
}

module.exports = HammerofPurphoros;
