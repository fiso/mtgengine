"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reflexes extends UnimplementedCard {
  constructor (game) {
    super(game, "Reflexes", "Ninth Edition", "9ED");
  }
}

module.exports = Reflexes;
