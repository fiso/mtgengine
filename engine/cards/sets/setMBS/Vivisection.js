"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vivisection extends UnimplementedCard {
  constructor(game) {
    super(game, "Vivisection", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Vivisection;
