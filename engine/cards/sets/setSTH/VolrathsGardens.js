"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolrathsGardens extends UnimplementedCard {
  constructor(game) {
    super(game, "Volrath's Gardens", "Stronghold", "STH");
  }
}

module.exports = VolrathsGardens;
