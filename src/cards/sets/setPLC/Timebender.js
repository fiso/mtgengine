"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Timebender extends UnimplementedCard {
  constructor (game) {
    super(game, "Timebender", "Planar Chaos", "PLC");
  }
}

module.exports = Timebender;
