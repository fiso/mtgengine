"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ferrovore extends UnimplementedCard {
  constructor (game) {
    super(game, "Ferrovore", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Ferrovore;
