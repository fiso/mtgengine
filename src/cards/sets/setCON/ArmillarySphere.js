"use strict";
const Constants = require ("../../../Constants");
const ArmillarySphereBase = require("../setC17/ArmillarySphere");

class ArmillarySphere extends ArmillarySphereBase {
  constructor (game) {
    super(game, "Armillary Sphere", "Conflux", "CON");
  }
}

module.exports = ArmillarySphere;
