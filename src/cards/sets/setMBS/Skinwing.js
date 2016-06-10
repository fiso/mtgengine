"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skinwing extends UnimplementedCard {
  constructor (game) {
    super(game, "Skinwing", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Skinwing;
