"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StampedeDriver extends UnimplementedCard {
  constructor (game) {
    super(game, "Stampede Driver", "Masters 25", "A25");
  }
}

module.exports = StampedeDriver;
