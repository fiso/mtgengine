"use strict";
const Constants = require ("../../../Constants");
const DismissivePyromancerBase = require("../setM19/DismissivePyromancer");

class DismissivePyromancer extends DismissivePyromancerBase {
  constructor (game) {
    super(game, "Dismissive Pyromancer", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = DismissivePyromancer;
