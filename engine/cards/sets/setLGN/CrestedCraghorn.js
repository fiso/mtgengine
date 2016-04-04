"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrestedCraghorn extends Card {
  constructor(game) {
    super(game, "Crested Craghorn", "Legions", "LGN");
  }
}

module.exports = CrestedCraghorn;
