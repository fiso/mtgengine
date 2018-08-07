"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class XanthicStatue extends UnimplementedCard {
  constructor (game) {
    super(game, "Xanthic Statue", "Weatherlight", "WTH");
  }
}

module.exports = XanthicStatue;
