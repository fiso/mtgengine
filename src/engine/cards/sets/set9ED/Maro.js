"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Maro extends UnimplementedCard {
  constructor (game) {
    super(game, "Maro", "Ninth Edition", "9ED");
  }
}

module.exports = Maro;
