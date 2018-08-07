"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IronStar extends UnimplementedCard {
  constructor (game) {
    super(game, "Iron Star", "Eighth Edition", "8ED");
  }
}

module.exports = IronStar;
