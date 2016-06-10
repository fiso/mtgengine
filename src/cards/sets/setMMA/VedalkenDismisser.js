"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VedalkenDismisser extends UnimplementedCard {
  constructor (game) {
    super(game, "Vedalken Dismisser", "Modern Masters", "MMA");
  }
}

module.exports = VedalkenDismisser;
