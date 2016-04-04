"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WoodenSphereBase = require("../set6ED/WoodenSphere.js");

class WoodenSphere extends WoodenSphereBase {
  constructor(game) {
    super(game, "Wooden Sphere", "Collector's Edition", "CED");
  }
}

module.exports = WoodenSphere;
