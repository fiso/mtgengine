"use strict";
const Constants = require ("../../../Constants");
const WoodenSphereBase = require("../set8ED/WoodenSphere");

class WoodenSphere extends WoodenSphereBase {
  constructor (game) {
    super(game, "Wooden Sphere", "Collectors’ Edition", "CED");
  }
}

module.exports = WoodenSphere;
