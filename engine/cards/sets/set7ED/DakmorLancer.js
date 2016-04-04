"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DakmorLancer extends UnimplementedCard {
  constructor(game) {
    super(game, "Dakmor Lancer", "Seventh Edition", "7ED");
  }
}

module.exports = DakmorLancer;
