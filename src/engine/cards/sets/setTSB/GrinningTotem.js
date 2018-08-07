"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrinningTotem extends UnimplementedCard {
  constructor (game) {
    super(game, "Grinning Totem", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = GrinningTotem;
