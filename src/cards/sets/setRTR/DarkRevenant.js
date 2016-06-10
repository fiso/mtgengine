"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkRevenant extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Revenant", "Return to Ravnica", "RTR");
  }
}

module.exports = DarkRevenant;
