"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Regrowth extends UnimplementedCard {
  constructor(game) {
    super(game, "Regrowth", "Collector's Edition", "CED");
  }
}

module.exports = Regrowth;
