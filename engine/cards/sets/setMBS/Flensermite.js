"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flensermite extends UnimplementedCard {
  constructor(game) {
    super(game, "Flensermite", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Flensermite;
