"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoriokReaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Moriok Reaver", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MoriokReaver;
