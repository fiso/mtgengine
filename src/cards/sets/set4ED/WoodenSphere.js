"use strict";
const Constants = require ("../../../Constants");
const WoodenSphereBase = require("../set8ED/WoodenSphere");

class WoodenSphere extends WoodenSphereBase {
  constructor (game) {
    super(game, "Wooden Sphere", "Fourth Edition", "4ED");
  }
}

module.exports = WoodenSphere;
