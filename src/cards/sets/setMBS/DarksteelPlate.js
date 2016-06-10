"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarksteelPlate extends UnimplementedCard {
  constructor (game) {
    super(game, "Darksteel Plate", "Mirrodin Besieged", "MBS");
  }
}

module.exports = DarksteelPlate;
