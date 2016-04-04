"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolcanicEruption extends Card {
  constructor(game) {
    super(game, "Volcanic Eruption", "Collector's Edition", "CED");
  }
}

module.exports = VolcanicEruption;
