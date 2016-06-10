"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChokingVines extends UnimplementedCard {
  constructor (game) {
    super(game, "Choking Vines", "Weatherlight", "WTH");
  }
}

module.exports = ChokingVines;
