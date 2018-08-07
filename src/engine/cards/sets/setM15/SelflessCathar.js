"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelflessCathar extends UnimplementedCard {
  constructor (game) {
    super(game, "Selfless Cathar", "Magic 2015", "M15");
  }
}

module.exports = SelflessCathar;
