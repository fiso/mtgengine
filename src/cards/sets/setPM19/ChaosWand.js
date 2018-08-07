"use strict";
const Constants = require ("../../../Constants");
const ChaosWandBase = require("../setM19/ChaosWand");

class ChaosWand extends ChaosWandBase {
  constructor (game) {
    super(game, "Chaos Wand", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = ChaosWand;
