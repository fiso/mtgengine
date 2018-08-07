"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TidalFlats extends UnimplementedCard {
  constructor (game) {
    super(game, "Tidal Flats", "Fallen Empires", "FEM");
  }
}

module.exports = TidalFlats;
