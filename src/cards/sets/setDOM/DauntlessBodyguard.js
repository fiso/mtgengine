"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DauntlessBodyguard extends UnimplementedCard {
  constructor (game) {
    super(game, "Dauntless Bodyguard", "Dominaria", "DOM");
  }
}

module.exports = DauntlessBodyguard;
