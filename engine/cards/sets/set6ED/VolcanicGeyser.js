"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolcanicGeyser extends Card {
  constructor(game) {
    super(game, "Volcanic Geyser", "Classic Sixth Edition", "6ED");
  }
}

module.exports = VolcanicGeyser;
