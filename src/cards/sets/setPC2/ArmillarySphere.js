"use strict";
const Constants = require ("../../../Constants");
const ArmillarySphereBase = require("../setC13/ArmillarySphere");

class ArmillarySphere extends ArmillarySphereBase {
  constructor (game) {
    super(game, "Armillary Sphere", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ArmillarySphere;
