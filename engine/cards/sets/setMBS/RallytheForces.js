"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RallytheForces extends Card {
  constructor(game) {
    super(game, "Rally the Forces", "Mirrodin Besieged", "MBS");
  }
}

module.exports = RallytheForces;
