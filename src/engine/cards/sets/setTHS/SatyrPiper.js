"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SatyrPiper extends UnimplementedCard {
  constructor (game) {
    super(game, "Satyr Piper", "Theros", "THS");
  }
}

module.exports = SatyrPiper;
