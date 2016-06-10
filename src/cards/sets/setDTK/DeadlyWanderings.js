"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadlyWanderings extends UnimplementedCard {
  constructor (game) {
    super(game, "Deadly Wanderings", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DeadlyWanderings;
