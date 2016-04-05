"use strict";
const Constants = require ("../../../Constants");
const ArmillarySphereBase = require("../setC13/ArmillarySphere");

class ArmillarySphere extends ArmillarySphereBase {
  constructor(game) {
    super(game, "Armillary Sphere", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = ArmillarySphere;
