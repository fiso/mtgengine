"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InnerChamberGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Inner-Chamber Guard", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = InnerChamberGuard;
