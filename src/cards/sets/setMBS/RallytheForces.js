"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RallytheForces extends UnimplementedCard {
  constructor (game) {
    super(game, "Rally the Forces", "Mirrodin Besieged", "MBS");
  }
}

module.exports = RallytheForces;
