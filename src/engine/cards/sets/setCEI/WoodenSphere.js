"use strict";
const Constants = require ("../../../Constants");
const WoodenSphereBase = require("../set8ED/WoodenSphere");

class WoodenSphere extends WoodenSphereBase {
  constructor (game) {
    super(game, "Wooden Sphere", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = WoodenSphere;
