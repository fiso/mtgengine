"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HollowDogs extends UnimplementedCard {
  constructor (game) {
    super(game, "Hollow Dogs", "Ninth Edition", "9ED");
  }
}

module.exports = HollowDogs;
