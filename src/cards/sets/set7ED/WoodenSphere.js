"use strict";
const Constants = require ("../../../Constants");
const WoodenSphereBase = require("../set6ED/WoodenSphere");

class WoodenSphere extends WoodenSphereBase {
  constructor(game) {
    super(game, "Wooden Sphere", "Seventh Edition", "7ED");
  }
}

module.exports = WoodenSphere;
