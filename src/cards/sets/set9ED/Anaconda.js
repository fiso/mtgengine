"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Anaconda extends UnimplementedCard {
  constructor (game) {
    super(game, "Anaconda", "Ninth Edition", "9ED");
  }
}

module.exports = Anaconda;
