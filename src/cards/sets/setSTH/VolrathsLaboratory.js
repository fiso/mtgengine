"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolrathsLaboratory extends UnimplementedCard {
  constructor(game) {
    super(game, "Volrath's Laboratory", "Stronghold", "STH");
  }
}

module.exports = VolrathsLaboratory;
