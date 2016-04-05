"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiralingDuelist extends UnimplementedCard {
  constructor(game) {
    super(game, "Spiraling Duelist", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SpiralingDuelist;
