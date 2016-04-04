"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Aquamoeba extends Card {
  constructor(game) {
    super(game, "Aquamoeba", "Torment", "TOR");
  }
}

module.exports = Aquamoeba;
