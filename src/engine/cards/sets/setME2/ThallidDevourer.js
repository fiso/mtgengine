"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThallidDevourer extends UnimplementedCard {
  constructor (game) {
    super(game, "Thallid Devourer", "Masters Edition II", "ME2");
  }
}

module.exports = ThallidDevourer;
