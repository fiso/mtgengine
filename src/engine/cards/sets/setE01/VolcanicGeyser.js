"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicGeyser extends UnimplementedCard {
  constructor (game) {
    super(game, "Volcanic Geyser", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = VolcanicGeyser;
