"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Starstorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Starstorm", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = Starstorm;
