"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrineShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Brine Shaman", "Masters Edition II", "ME2");
  }
}

module.exports = BrineShaman;
