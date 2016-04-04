"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Allay extends UnimplementedCard {
  constructor(game) {
    super(game, "Allay", "Exodus", "EXO");
  }
}

module.exports = Allay;
