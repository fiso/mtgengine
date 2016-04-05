"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CyclopeanTomb extends UnimplementedCard {
  constructor(game) {
    super(game, "Cyclopean Tomb", "Collector's Edition", "CED");
  }
}

module.exports = CyclopeanTomb;
