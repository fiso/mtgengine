"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dragonstorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragonstorm", "Modern Masters", "MMA");
  }
}

module.exports = Dragonstorm;
