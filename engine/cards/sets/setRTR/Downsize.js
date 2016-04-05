"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Downsize extends UnimplementedCard {
  constructor(game) {
    super(game, "Downsize", "Return to Ravnica", "RTR");
  }
}

module.exports = Downsize;
