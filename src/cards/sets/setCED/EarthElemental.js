"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EarthElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Earth Elemental", "Collector's Edition", "CED");
  }
}

module.exports = EarthElemental;
