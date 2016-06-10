"use strict";
const Constants = require ("../../../Constants");
const WoodenSphereBase = require("../set6ED/WoodenSphere");

class WoodenSphere extends WoodenSphereBase {
  constructor (game) {
    super(game, "Wooden Sphere", "International Collector's Edition", "CEI");
  }
}

module.exports = WoodenSphere;
