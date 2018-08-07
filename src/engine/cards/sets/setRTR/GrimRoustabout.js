"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimRoustabout extends UnimplementedCard {
  constructor (game) {
    super(game, "Grim Roustabout", "Return to Ravnica", "RTR");
  }
}

module.exports = GrimRoustabout;
