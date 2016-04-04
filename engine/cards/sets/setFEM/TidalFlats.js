"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TidalFlats extends Card {
  constructor(game) {
    super(game, "Tidal Flats", "Fallen Empires", "FEM");
  }
}

module.exports = TidalFlats;
