"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Piety extends UnimplementedCard {
  constructor (game) {
    super(game, "Piety", "Fourth Edition", "4ED");
  }
}

module.exports = Piety;
