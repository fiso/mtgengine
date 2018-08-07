"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrWelder extends UnimplementedCard {
  constructor (game) {
    super(game, "Myr Welder", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MyrWelder;
