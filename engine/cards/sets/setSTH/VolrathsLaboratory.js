"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolrathsLaboratory extends Card {
  constructor(game) {
    super(game, "Volrath's Laboratory", "Stronghold", "STH");
  }
}

module.exports = VolrathsLaboratory;
