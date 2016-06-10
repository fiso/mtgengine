"use strict";
const Constants = require ("../../../Constants");
const ArmillarySphereBase = require("../setC13/ArmillarySphere");

class ArmillarySphere extends ArmillarySphereBase {
  constructor (game) {
    super(game, "Armillary Sphere", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = ArmillarySphere;
