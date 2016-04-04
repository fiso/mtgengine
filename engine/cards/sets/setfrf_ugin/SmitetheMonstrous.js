"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SmitetheMonstrousBase = require("../setBFZ/SmitetheMonstrous.js");

class SmitetheMonstrous extends SmitetheMonstrousBase {
  constructor(game) {
    super(game, "Smite the Monstrous", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = SmitetheMonstrous;
