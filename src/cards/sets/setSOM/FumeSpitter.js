"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FumeSpitter extends UnimplementedCard {
  constructor (game) {
    super(game, "Fume Spitter", "Scars of Mirrodin", "SOM");
  }
}

module.exports = FumeSpitter;
