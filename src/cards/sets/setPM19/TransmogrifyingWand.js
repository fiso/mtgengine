"use strict";
const Constants = require ("../../../Constants");
const TransmogrifyingWandBase = require("../setM19/TransmogrifyingWand");

class TransmogrifyingWand extends TransmogrifyingWandBase {
  constructor (game) {
    super(game, "Transmogrifying Wand", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = TransmogrifyingWand;
