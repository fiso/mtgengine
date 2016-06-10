"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RathiDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Rathi Dragon", "Ninth Edition", "9ED");
  }
}

module.exports = RathiDragon;
