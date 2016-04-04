"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flay extends UnimplementedCard {
  constructor(game) {
    super(game, "Flay", "Prophecy", "PCY");
  }
}

module.exports = Flay;
