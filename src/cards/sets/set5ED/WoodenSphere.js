"use strict";
const Constants = require ("../../../Constants");
const WoodenSphereBase = require("../set6ED/WoodenSphere");

class WoodenSphere extends WoodenSphereBase {
  constructor (game) {
    super(game, "Wooden Sphere", "Fifth Edition", "5ED");
  }
}

module.exports = WoodenSphere;
