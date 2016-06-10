"use strict";
const Constants = require ("../../../Constants");
const ShieldSphereBase = require("../setALL/ShieldSphere");

class ShieldSphere extends ShieldSphereBase {
  constructor (game) {
    super(game, "Shield Sphere", "Masters Edition", "MED");
  }
}

module.exports = ShieldSphere;
