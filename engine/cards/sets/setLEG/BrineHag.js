"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrineHag extends UnimplementedCard {
  constructor(game) {
    super(game, "Brine Hag", "Legends", "LEG");
  }
}

module.exports = BrineHag;
