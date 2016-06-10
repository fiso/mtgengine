"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlumReaper extends UnimplementedCard {
  constructor (game) {
    super(game, "Slum Reaper", "Return to Ravnica", "RTR");
  }
}

module.exports = SlumReaper;
