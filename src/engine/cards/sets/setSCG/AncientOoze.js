"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientOoze extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Ooze", "Scourge", "SCG");
  }
}

module.exports = AncientOoze;
