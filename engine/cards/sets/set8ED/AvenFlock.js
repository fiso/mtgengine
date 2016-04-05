"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenFlock extends UnimplementedCard {
  constructor(game) {
    super(game, "Aven Flock", "Eighth Edition", "8ED");
  }
}

module.exports = AvenFlock;
