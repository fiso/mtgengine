"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaGeyser extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Geyser", "Fifth Dawn", "5DN");
  }
}

module.exports = ManaGeyser;
