"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlagueWind extends UnimplementedCard {
  constructor(game) {
    super(game, "Plague Wind", "Eighth Edition", "8ED");
  }
}

module.exports = PlagueWind;
