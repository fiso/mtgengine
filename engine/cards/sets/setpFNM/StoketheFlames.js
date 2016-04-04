"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoketheFlames extends Card {
  constructor(game) {
    super(game, "Stoke the Flames", "Friday Night Magic", "pFNM");
  }
}

module.exports = StoketheFlames;
