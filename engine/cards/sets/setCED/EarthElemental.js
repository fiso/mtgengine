"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EarthElemental extends Card {
  constructor(game) {
    super(game, "Earth Elemental", "Collector's Edition", "CED");
  }
}

module.exports = EarthElemental;
