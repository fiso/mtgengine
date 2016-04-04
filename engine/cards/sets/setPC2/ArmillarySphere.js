"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmillarySphereBase = require("../setC13/ArmillarySphere.js");

class ArmillarySphere extends ArmillarySphereBase {
  constructor(game) {
    super(game, "Armillary Sphere", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ArmillarySphere;
