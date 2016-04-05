"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuicksilverGeyser extends UnimplementedCard {
  constructor(game) {
    super(game, "Quicksilver Geyser", "Mirrodin Besieged", "MBS");
  }
}

module.exports = QuicksilverGeyser;
