"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deathgazer extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathgazer", "Ninth Edition", "9ED");
  }
}

module.exports = Deathgazer;
