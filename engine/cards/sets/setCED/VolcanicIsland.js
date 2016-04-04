"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolcanicIsland extends Card {
  constructor(game) {
    super(game, "Volcanic Island", "Collector's Edition", "CED");
  }
}

module.exports = VolcanicIsland;
