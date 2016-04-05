"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturalSelection extends UnimplementedCard {
  constructor(game) {
    super(game, "Natural Selection", "Collector's Edition", "CED");
  }
}

module.exports = NaturalSelection;
