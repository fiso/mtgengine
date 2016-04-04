"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoarShade extends UnimplementedCard {
  constructor(game) {
    super(game, "Hoar Shade", "Ice Age", "ICE");
  }
}

module.exports = HoarShade;
