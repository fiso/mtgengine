"use strict";
const Constants = require ("../../../Constants");
const ArmillarySphereBase = require("../setC17/ArmillarySphere");

class ArmillarySphere extends ArmillarySphereBase {
  constructor (game) {
    super(game, "Armillary Sphere", "Commander 2013", "C13");
  }
}

module.exports = ArmillarySphere;
