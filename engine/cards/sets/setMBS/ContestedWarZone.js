"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ContestedWarZone extends UnimplementedCard {
  constructor(game) {
    super(game, "Contested War Zone", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ContestedWarZone;
