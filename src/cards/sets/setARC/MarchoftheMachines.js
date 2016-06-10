"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarchoftheMachines extends UnimplementedCard {
  constructor (game) {
    super(game, "March of the Machines", "Archenemy", "ARC");
  }
}

module.exports = MarchoftheMachines;
