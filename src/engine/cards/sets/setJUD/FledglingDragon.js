"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FledglingDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Fledgling Dragon", "Judgment", "JUD");
  }
}

module.exports = FledglingDragon;
