"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CreepingMold extends UnimplementedCard {
  constructor (game) {
    super(game, "Creeping Mold", "Kaladesh", "KLD");
  }
}

module.exports = CreepingMold;
