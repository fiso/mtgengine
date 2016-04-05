"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stasis extends UnimplementedCard {
  constructor(game) {
    super(game, "Stasis", "Collector's Edition", "CED");
  }
}

module.exports = Stasis;
