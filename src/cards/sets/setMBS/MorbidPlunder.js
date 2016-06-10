"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MorbidPlunder extends UnimplementedCard {
  constructor (game) {
    super(game, "Morbid Plunder", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MorbidPlunder;
