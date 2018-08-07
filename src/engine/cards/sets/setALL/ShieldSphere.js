"use strict";
const Constants = require ("../../../Constants");
const ShieldSphereBase = require("../setMED/ShieldSphere");

class ShieldSphere extends ShieldSphereBase {
  constructor (game) {
    super(game, "Shield Sphere", "Alliances", "ALL");
  }
}

module.exports = ShieldSphere;
