"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deathgazer extends UnimplementedCard {
  constructor(game) {
    super(game, "Deathgazer", "Eighth Edition", "8ED");
  }
}

module.exports = Deathgazer;
