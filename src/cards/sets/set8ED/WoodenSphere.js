"use strict";
const Constants = require ("../../../Constants");
const WoodenSphereBase = require("../set6ED/WoodenSphere");

class WoodenSphere extends WoodenSphereBase {
  constructor (game) {
    super(game, "Wooden Sphere", "Eighth Edition", "8ED");
  }
}

module.exports = WoodenSphere;
