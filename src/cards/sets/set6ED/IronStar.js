"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IronStar extends UnimplementedCard {
  constructor (game) {
    super(game, "Iron Star", "Classic Sixth Edition", "6ED");
  }
}

module.exports = IronStar;
