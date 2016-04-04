"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FortifiedArea extends UnimplementedCard {
  constructor(game) {
    super(game, "Fortified Area", "Fourth Edition", "4ED");
  }
}

module.exports = FortifiedArea;
