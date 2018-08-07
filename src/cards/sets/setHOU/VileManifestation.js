"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VileManifestation extends UnimplementedCard {
  constructor (game) {
    super(game, "Vile Manifestation", "Hour of Devastation", "HOU");
  }
}

module.exports = VileManifestation;
