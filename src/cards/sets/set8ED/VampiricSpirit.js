"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampiricSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampiric Spirit", "Eighth Edition", "8ED");
  }
}

module.exports = VampiricSpirit;
