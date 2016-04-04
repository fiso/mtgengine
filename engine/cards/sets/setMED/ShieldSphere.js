"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShieldSphereBase = require("../setALL/ShieldSphere.js");

class ShieldSphere extends ShieldSphereBase {
  constructor(game) {
    super(game, "Shield Sphere", "Masters Edition", "MED");
  }
}

module.exports = ShieldSphere;
