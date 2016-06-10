"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViridianRevel extends UnimplementedCard {
  constructor (game) {
    super(game, "Viridian Revel", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ViridianRevel;
