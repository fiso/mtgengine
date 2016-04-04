"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WindScarredCragBase = require("../setC15/WindScarredCrag.js");

class WindScarredCrag extends WindScarredCragBase {
  constructor(game) {
    super(game, "Wind-Scarred Crag", "Fate Reforged", "FRF");
  }
}

module.exports = WindScarredCrag;
