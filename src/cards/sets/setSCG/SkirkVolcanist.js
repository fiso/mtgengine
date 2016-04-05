"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkirkVolcanist extends UnimplementedCard {
  constructor(game) {
    super(game, "Skirk Volcanist", "Scourge", "SCG");
  }
}

module.exports = SkirkVolcanist;
