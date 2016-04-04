"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WoodenSphereBase = require("../set6ED/WoodenSphere.js");

class WoodenSphere extends WoodenSphereBase {
  constructor(game) {
    super(game, "Wooden Sphere", "Fourth Edition", "4ED");
  }
}

module.exports = WoodenSphere;
