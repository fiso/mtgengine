"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WoodenSphereBase = require("../set6ED/WoodenSphere.js");

class WoodenSphere extends WoodenSphereBase {
  constructor(game) {
    super(game, "Wooden Sphere", "Limited Edition Alpha", "LEA");
  }
}

module.exports = WoodenSphere;
