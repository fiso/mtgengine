"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thundermare extends UnimplementedCard {
  constructor (game) {
    super(game, "Thundermare", "Ninth Edition", "9ED");
  }
}

module.exports = Thundermare;
