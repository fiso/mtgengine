"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicGeyser extends UnimplementedCard {
  constructor(game) {
    super(game, "Volcanic Geyser", "Classic Sixth Edition", "6ED");
  }
}

module.exports = VolcanicGeyser;
