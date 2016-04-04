"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SmitetheMonstrousBase = require("../setBFZ/SmitetheMonstrous.js");

class SmitetheMonstrous extends SmitetheMonstrousBase {
  constructor(game) {
    super(game, "Smite the Monstrous", "Khans of Tarkir", "KTK");
  }
}

module.exports = SmitetheMonstrous;
