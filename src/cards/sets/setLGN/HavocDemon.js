"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HavocDemon extends UnimplementedCard {
  constructor(game) {
    super(game, "Havoc Demon", "Legions", "LGN");
  }
}

module.exports = HavocDemon;
