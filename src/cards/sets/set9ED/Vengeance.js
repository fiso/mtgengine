"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vengeance extends UnimplementedCard {
  constructor (game) {
    super(game, "Vengeance", "Ninth Edition", "9ED");
  }
}

module.exports = Vengeance;
