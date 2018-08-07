"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaGeyser extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Geyser", "Conspiracy", "CNS");
  }
}

module.exports = ManaGeyser;
