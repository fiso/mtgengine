"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RakdosCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Rakdos Charm", "Return to Ravnica", "RTR");
  }
}

module.exports = RakdosCharm;
