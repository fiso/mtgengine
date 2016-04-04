"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkirkVolcanist extends Card {
  constructor(game) {
    super(game, "Skirk Volcanist", "Scourge", "SCG");
  }
}

module.exports = SkirkVolcanist;
