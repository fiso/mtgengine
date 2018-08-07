"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArchangelsLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Archangel's Light", "Dark Ascension", "DKA");
  }
}

module.exports = ArchangelsLight;
