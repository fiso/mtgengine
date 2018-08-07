"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeviantGlee extends UnimplementedCard {
  constructor (game) {
    super(game, "Deviant Glee", "Return to Ravnica", "RTR");
  }
}

module.exports = DeviantGlee;
