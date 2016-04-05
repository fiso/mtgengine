"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RotWolf extends UnimplementedCard {
  constructor(game) {
    super(game, "Rot Wolf", "Mirrodin Besieged", "MBS");
  }
}

module.exports = RotWolf;
