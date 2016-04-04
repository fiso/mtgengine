"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VenerableLammasu extends Card {
  constructor(game) {
    super(game, "Venerable Lammasu", "Khans of Tarkir", "KTK");
  }
}

module.exports = VenerableLammasu;
