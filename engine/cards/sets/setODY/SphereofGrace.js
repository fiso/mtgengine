"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SphereofGrace extends Card {
  constructor(game) {
    super(game, "Sphere of Grace", "Odyssey", "ODY");
  }
}

module.exports = SphereofGrace;
