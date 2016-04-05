"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicIsland extends UnimplementedCard {
  constructor(game) {
    super(game, "Volcanic Island", "Collector's Edition", "CED");
  }
}

module.exports = VolcanicIsland;
