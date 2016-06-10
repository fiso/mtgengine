"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SatyrRambler extends UnimplementedCard {
  constructor (game) {
    super(game, "Satyr Rambler", "Theros", "THS");
  }
}

module.exports = SatyrRambler;
