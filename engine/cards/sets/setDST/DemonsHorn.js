"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonsHorn extends UnimplementedCard {
  constructor(game) {
    super(game, "Demon's Horn", "Darksteel", "DST");
  }
}

module.exports = DemonsHorn;
