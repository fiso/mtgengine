"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ProtectiveSphere extends Card {
  constructor(game) {
    super(game, "Protective Sphere", "Invasion", "INV");
  }
}

module.exports = ProtectiveSphere;
