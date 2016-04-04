"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Larceny extends UnimplementedCard {
  constructor(game) {
    super(game, "Larceny", "Eighth Edition", "8ED");
  }
}

module.exports = Larceny;
