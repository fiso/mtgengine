"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrannysPayback extends UnimplementedCard {
  constructor (game) {
    super(game, "Granny's Payback", "Unhinged", "UNH");
  }
}

module.exports = GrannysPayback;
